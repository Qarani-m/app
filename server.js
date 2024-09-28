// server.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import the cors module

const app = express();
const PORT = 3098;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up your email transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: 'emqarani@gmail.com', // Your email
        pass: 'zdtb juhe ivnt rhmm', // Your email password
    },
});

// Endpoint to log visits
app.get('/notify', (req, res) => {
    const mailOptions = {
        from: 'emqarani@gmail.com',
        to: 'emqarani1@gmail.com',
        subject: 'New Visitor Notification',
        text: `New visitor`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent: ' + info.response);
        res.send('Visitor logged');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
