import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { render } from "@react-email/components";
import EmailTemplate from "@/emails/EmailTemplate"; // Ensure this is a default export of a React component

export async function POST(request: NextRequest) {
  const {
    name,
    company,
    email,
    phone,
    projectInMind,
    subject,
    message,
    projectType,
    estimatedBudget,
    projectDescription,
    files,
  } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  const emailHtml = await render(
    <EmailTemplate
      name={name}
      company={company}
      email={email}
      phone={phone}
      projectInMind={projectInMind}
      subject={subject}
      message={message}
      projectType={projectType}
      estimatedBudget={estimatedBudget}
      projectDescription={projectDescription}
      files={files}
    />
  );

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    // subject: `Message from ${name} (${email})`,
    // text: message,
    html: emailHtml,
    attachments: files
      ? files.map((file: any) => {
          return {
            filename: file.name, // Ensure the file object contains a 'name' property
            content: file.content, // Ensure the file object contains a 'content' property (base64 or Buffer)
            encoding: "base64", // Adjust encoding if necessary
          };
        })
      : [],
  };

  console.log(mailOptions);
  console.log(files, "FILES");

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err: Error | null) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
