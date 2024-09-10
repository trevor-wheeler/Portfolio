import express, { text } from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin: ['http://localhost:5173'],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

app.post('/', (req, res) => {

    const pigeon = nodemailer.createTransport({
        host: 'webhost.dynadot.com',
        port: 587,
        //secure: false,
        auth: {
            user: 'pigeon@trevorwheeler.com',
            pass: 'example'
        }
    });

    const mailOptions = {
        from: 'pigeon@trevorwheeler.com',
        to: 'contact@trevorwheeler.com',
        replyTo: req.body.email,
        subject: req.body.subject,
        html: `
        <p><strong>From:</strong> ${req.body.email}</p>
        <p><strong>Name:</strong> ${req.body.first} ${req.body.last}</p>

        ${req.body.body}`
    }

    pigeon.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send('error');
        }
        else {
            res.send('Success');
        }
    });

});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});