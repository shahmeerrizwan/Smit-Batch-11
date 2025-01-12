import nodemailer from 'nodemailer';
import 'dotenv/config';

const { senderEmail, senderPassword } = process.env;

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: senderEmail,
        pass: senderPassword,
    },
});

const sendEmail = async (recipientEmail, token) => {
    console.log('Sending email to:', recipientEmail);

    const htmlTemplate = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <table style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <tr>
          <td style="text-align: center;">
            <h1 style="color: #4CAF50;">Welcome to Our Platform</h1>
          </td>
        </tr>
        <tr>
          <td>
            <p>Hello,</p>
            <p>Thank you for signing up! Please click the button below to verify your email address:</p>
            <div style="text-align: center; margin: 20px;">
              <a href="http://ourfrontend.com/${token}" 
                style="text-decoration: none; background-color: #4CAF50; color: #fff; padding: 10px 20px; border-radius: 5px; font-size: 16px;">
                Verify Email
              </a>
            </div>
            <p>If you didn’t create an account, you can safely ignore this email.</p>
          </td>
        </tr>
        <tr>
          <td style="text-align: center; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="font-size: 14px; color: #aaa;">
              &copy; 2025 Our Platform, Inc. All rights reserved.
            </p>
          </td>
        </tr>
      </table>
    </div>
  `;

    const mailOptions = {
        from: `${senderEmail}`,
        to: recipientEmail,
        subject: 'Verify Your Email Address',
        html: htmlTemplate,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
}

export default sendEmail;