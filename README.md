Job Hunt - Job Hunt Rewards

Job Hunt Rewards is an innovative platform that gamifies the job search experience. Whether you are searching for remote or office-based jobs, this platform allows users to explore job listings, earn rewards for active participation, and share achievements with their network. It transforms the job-hunting process into a fun, engaging, and productive journey.

Visit the [Deployed Website](https://polite-pixie-bf82a7.netlify.app/#) to start your search today!

![website Screenshot](images/screenshot.png.jpeg)

Introduction
In today’s competitive job market, finding the right job can be daunting. Job Hunt Rewards changes the narrative by adding an element of fun through gamification. Users earn rewards for every job they apply for, for sharing listings with friends, and for successfully landing a job. This helps job seekers stay motivated and engaged while searching for new opportunities. 

Explore the latest job openings, build your career, and get rewarded for every milestone you hit! Join the future of job searching and turn every job application into an achievement!

Read more about the [Final Project Blog Article](https://polite-pixie-bf82a7.netlify.app/#).

Technology Stack
Frontend

HTML5
CSS3
Vanilla JavaScript

We chose to use core web technologies without additional frameworks to solidify our understanding of fundamental concepts and to ensure fast load times for our users.
Backend

Node.js
Express.js

The backend is built on Node.js with Express.js as the web application framework. This choice was made due to Node.js's non-blocking I/O model, which allows for efficient handling of concurrent requests - a crucial factor for a platform that could potentially serve thousands of job seekers simultaneously.
Database

MongoDB

For data persistence, we chose MongoDB, a NoSQL database that offers flexibility in data modeling and scalability. This choice allows us to easily adapt our data structure as the platform evolves.
Project Structure
Copyjobhunt/
│
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── backend/
│   ├── app.js
│   ├── models/
│   │   └── User.js
│   └── routes/
│       ├── auth.js
│       └── jobs.js
│
├── .gitignore
├── package.json
└── README.md
Setup and Installation

Clone the repository:
Copygit clone https://github.com/yourusername/jobhunt.git
cd jobhunt

Install dependencies:
Copynpm install

Set up MongoDB:

Make sure MongoDB is installed and running on your system.
The application will connect to mongodb://localhost:27017/jobhunt by default.


Start the server:
Copynode backend/app.js

Open frontend/index.html in your web browser to access the application.

Usage
Once you are on the Job Hunt Rewards platform, you can:

Search for Job Listings: Use the search feature to find the latest job postings that match your skill set and preferences.
Earn Rewards: Gain points for every job application, referral, and action on the platform.
Share Your Achievements: Show off your accomplishments by sharing them with your network and tracking your progress through the gamified interface.
Stay engaged, and enjoy a rewarding job search experience!

We welcome contributions to the JobHunt platform. Please feel free to submit issues and pull requests.

Please ensure your code follows the best practices and is well-documented.

Related Projects
If you found Job Hunt Rewards useful, here are some other related projects you might want to check out:

Remote Job Hunter: A platform specifically for remote job seekers.
Resume Builder Pro: A tool to create professional resumes easily.
Career Advancement Tips: A guide to improve your career development with actionable advice.

Licensing
Distributed under the MIT License. See `LICENSE` for more information.
