const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + 'client/build/index.html'));
    });
}

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `<h4>Hi,</h4>
        <p>New mail from <strong>${req.body.firstname} ${req.body.lastname}</strong></p>
        <p><strong>${req.body.firstname}'s</strong> queries are ${req.body.comments}.`;

        let transporter = nodemailer.createTransport({

            host: 'smtp.rediffmail.com',
            port: 25,
            auth: {
                user: 'razer0070@rediffmail.com',
                pass: 'Qwerty123@'
            }
        });

        let mailOptions = {
            from: req.body.email,
            to: 'razer0070@rediffmail.com',
            replyTo: req.body.email,
            subject: req.body.title,
            text: req.body.comments,
            html: htmlEmail
        };

        transporter.sendMail(mailOptions, (err, res) => {
            if (err) {
                return console.log(err);
            }

            console.log('Message sent', info.message);
            console.log('Message url', nodemailer.getTestMessageUrl(info));
        });

    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Listining on Port ${PORT}`);
});
