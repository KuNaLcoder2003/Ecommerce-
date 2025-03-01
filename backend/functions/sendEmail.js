const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "kunalindia59@gmail.com",
        pass: "pvwx cvap gvff deml"
    },
});


async function sendEmail(emailId) {
    const info = transporter.sendMail({
        from: '"Kunal" <kunalindia59@gmail.com>',
        to: emailId,
        subject: "Do not reply", // Subject line
        text: "Congratulations on successfully signinup with kunal", // Plain text body
        // html: "<b>Hello world?</b>", // HTML body,
    })
    console.log("Message sent: %s", info.messageId);
}

module.exports = sendEmail;