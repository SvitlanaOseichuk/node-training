import "dotenv/config"

import sgMail from "@sendgrid/mail";


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const message = {
    to: "svitlanaoseichuk@gmail.com",// of not fot one["s@jel.com", "jkdf.@hj.j", ...]
    from: "svitlanaoseichuk@gmail.com",
    subject: "hello",
    html: `<h1 style="color: blue;">hello from me</h1>`,
    text: `my name is not name`
}

sgMail.send(message).then(console.log).catch(console.error);