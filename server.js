const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Mock database 
let users = [];

//Function to add a user to the mock database
async function addUser(email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });
}

// Populate mock database with sample users
async function populateMockDatabase() {
  await addUser('user1@example.com', 'password123');
  await addUser('user2@example.com', 'securepass456');
  await addUser('user3@example.com', 'testuser789');
  console.log('Mock database populated with sample users');
}

// Call the function to populate the database when the server starts
populateMockDatabase();

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    await addUser(email, password);
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error signing up' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, 'your_jwt_secret');
      res.json({ token });
    } else {
      res.status(400).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

//navigation Routes
app.get('/employers', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'employers.html'));
});

app.get('/careers', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'careers.html'));
});

app.get('/job-seekers', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'job-seekers.html'));
});

app.get('/help-center', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'help-center.html'));
});

// Verify Token Middleware
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: 'No token provided' });
  
  jwt.verify(token, 'your_jwt_secret', (err, decoded) => {
    if (err) return res.status(500).json({ error: 'Failed to authenticate token' });
    req.userId = decoded.id;
    next();
  });
};

// Personalized Home Route
app.get('/home', verifyToken, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Start server
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
