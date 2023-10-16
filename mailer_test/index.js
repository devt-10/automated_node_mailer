const nodemailer = require("nodemailer");
const mailgen = require("mailgen");

async function sendMail() {
  let config = {
    service: "gmail",
    auth: {
      user: "devthakkarlm10@gmail.com",
      pass: "asuicuxstodmkhbj",//this was got from myaccount>>security>>app password
    },
  };
  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new mailgen({
    theme: "default",
    product: {
      name: "Termination",
      link: "https://manipal.edu/muj.html",
      // logo: "https://mailgen.js/img/logo.png",
    },
  });

  // const htmlTemplateInTheMail = {
  //   body: {
  //     name: "Anil Rana",
  //     intro: "You are terminated from the college.",
  //     action: {
  //       instructions:
  //         "To get started with Manipal University, please click here:",
  //       button: {
  //         color: "#22BC66",
  //         text: "Confirm your account",
  //         link: "https://manipal.edu/muj.html",
  //       },
  //     },
  //     outro:
  //       "Need help, or have questions? Just reply to this email, we'd love to help.",
  //   },
  // };
  // const mail = MailGenerator.generate(response);

  let message = {
    from: "director.anil.manipal@gmail.com",
    to: "shreyasv500@gmail.com",
    subject: "Termination",
    html: MailGenerator.generate({
      body: {
        name: "Shreyas Srivastava",
        intro: "You are terminated from the college.",
        action: {
          instructions: "Kindly contact the admin for further details.",
          button: {
            color: "#22BC66",
            text: "Submit your appeal",
            link: "https://ichef.bbci.co.uk/news/624/mcs/media/images/81763000/jpg/_81763098_risitas.jpg",
          },
        },
        outro:
          "Need help, or have questions? Just reply to this email, we'd love to help.",
      },
    }),
  };
  transporter
    .sendMail(message)
    .then(() => {
      console.log("Mail Sent!");
    })
    .catch((err) => {
      console.log(err);
    });
  //   res.status(200).send("Mail Sent!")
}

sendMail();
