const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/jobhunt')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// User model
const User = mongoose.model('User', {
  email: String,
  password: String
});

// Sign-up route
app.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Error signing up' });
  }
});

// Sign-in route
app.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ error: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send({ error: 'Invalid password' });
    }
    const token = jwt.sign({ userId: user._id }, 'your-hardcoded-secret');
    res.send({ token });
  } catch (error) {
    res.status(500).send({ error: 'Error signing in' });
  }
});

const PORT = 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
