const nodemailer = require('nodemailer');
require("dotenv").config();

const activeServer = async (req, res) => {
    res.json({"message": "The server is active"}), 200;
}

const sendEmail = async (req, res) => {
    {
        const { name, email, message, subject } = req.body;

        // Create transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail', // Use 'gmail' for Gmail's SMTP server
            auth: {
                user: process.env.EMAIL, // Your Gmail address
                pass: process.env.PASSWORD // Your Gmail password or App password
            }
        });

        // Setup email data
        let mailOptions = {
            from: email, // Sender address
            to: process.env.EMAIL, // Receiver address (your email)
            subject: subject, // Subject line
            text: message, // Plain text body
            html: `<p>You have a new message from ${name} (${email}):<br/></p><p>${message}</p>` // HTML body
        };

        // Send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.json({"message": error.message}), 400;
            }
            
            res.json({"message": "message sent"}), 200;
        });
    }
}

module.exports = { sendEmail, activeServer }