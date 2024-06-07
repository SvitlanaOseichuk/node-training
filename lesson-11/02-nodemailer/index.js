import "dotenv/config";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USERNAME,
      pass: process.env.MAILTRAP_PASSWORD,
    }
  });

  const message = {
    to: "svitlanaoseichuk@gmail.com",// of not fot one["s@jel.com", "jkdf.@hj.j", ...]
    from: "svitlanaoseichuk@gmail.com",
    subject: "hello",
    html: `<button style="color: blue;">click</button> <h1>hello from me</h1>`,
    text: `my name is not name`
}

transport.sendMail(message).then(console.log).catch(console.error);