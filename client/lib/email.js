import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function sendEmail(to, subject, html, text) {
  try {
    const mailOptions = {
      from: `"${process.env.NEXT_PUBLIC_APP_NAME || 'Hackathon Template'}" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
      text,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent: %s', info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Email sending failed:', error)
    throw new Error('Failed to send email')
  }
}

export function generateOTPEmail(otp, userName) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Verification</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #3b82f6; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
        .otp-code { background: #e5e7eb; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Email Verification</h1>
        </div>
        <div class="content">
          <p>Hello ${userName},</p>
          <p>Thank you for registering with us! To complete your registration, please use the following verification code:</p>
          
          <div class="otp-code">${otp}</div>
          
          <p>This code will expire in 5 minutes for security reasons.</p>
          <p>If you didn't request this verification, please ignore this email.</p>
          
          <p>Best regards,<br>The Team</p>
        </div>
        <div class="footer">
          <p>This is an automated email. Please do not reply to this message.</p>
        </div>
      </div>
    </html>
  `

  const text = `
    Email Verification
    
    Hello ${userName},
    
    Thank you for registering with us! To complete your registration, please use the following verification code:
    
    ${otp}
    
    This code will expire in 5 minutes for security reasons.
    
    If you didn't request this verification, please ignore this email.
    
    Best regards,
    The Team
  `

  return { html, text }
}

export function generatePasswordResetEmail(otp, userName) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #ef4444; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
        .otp-code { background: #e5e7eb; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Password Reset</h1>
        </div>
        <div class="content">
          <p>Hello ${userName},</p>
          <p>We received a request to reset your password. Use the following code to reset your password:</p>
          
          <div class="otp-code">${otp}</div>
          
          <p>This code will expire in 5 minutes for security reasons.</p>
          <p>If you didn't request a password reset, please ignore this email and your password will remain unchanged.</p>
          
          <p>Best regards,<br>The Team</p>
        </div>
        <div class="footer">
          <p>This is an automated email. Please do not reply to this message.</p>
        </div>
      </div>
    </html>
  `

  const text = `
    Password Reset
    
    Hello ${userName},
    
    We received a request to reset your password. Use the following code to reset your password:
    
    ${otp}
    
    This code will expire in 5 minutes for security reasons.
    
    If you didn't request a password reset, please ignore this email and your password will remain unchanged.
    
    Best regards,
    The Team
  `

  return { html, text }
} 