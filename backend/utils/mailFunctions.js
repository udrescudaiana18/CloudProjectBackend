const nodemailer = require("nodemailer")
const sendGridTransport = require("nodemailer-sendgrid-transport");
const transporter = nodemailer.createTransport(sendGridTransport({
    auth: {
        api_key: process.env.SENDGRID_API_KEY
    }
}))
const sendMail = (email, message, subject) => {
    transporter.sendMail({
        to: email,
        from: "aplicatieLicenta2021@gmail.com",
        subject: subject,
        html: `
        <p>${message}</p>
        <p>Cu stimă, echipa AplicațieLicență2021`
    }).then(resp => {
      console.log(resp)
    })
        .catch(err => {
            console.log(err)
        })
    }
module.exports={
    sendMail
}
