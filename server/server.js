import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Zoho admin transporter for sending notifications to contact@laevix.org
const adminTransporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.ADMIN_EMAIL || 'admin@laevix.org',
    pass: process.env.ADMIN_PASSWORD || 'B0kwmeY5r2Av'
  }
});

// Zoho transporter for sending auto-replies from contact@laevix.org
const zohoTransporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.CONTACT_EMAIL || 'contact@laevix.org',
    pass: process.env.CONTACT_PASSWORD || 'UQwNTyvLiwus'
  }
});

// Auto-reply email template (matches website theme)
const getAutoReplyHTML = (name) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background-color: #000000;
      color: #ffffff;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    .header {
      text-align: center;
      padding: 40px 0;
      border-bottom: 2px solid rgba(239, 68, 68, 0.2);
    }
    .logo {
      font-size: 32px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.05em;
      color: #000000;
      margin-bottom: 10px;
    }
    .tagline {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.4em;
      color: #ef4444;
      font-weight: 700;
    }
    .content {
      padding: 40px 0;
    }
    .greeting {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .message {
      font-size: 16px;
      line-height: 1.8;
      color: #404040;
      margin-bottom: 20px;
    }
    .cta-button {
      display: inline-block;
      padding: 16px 32px;
      background-color: #ef4444;
      color: #ffffff;
      text-decoration: none;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      font-size: 12px;
      margin: 20px 0;
    }
    .cta-button:hover {
      background-color: #ffffff;
      color: #000000;
    }
    .footer {
      border-top: 1px solid rgba(239, 68, 68, 0.1);
      padding-top: 30px;
      text-align: center;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: #737373;
    }
    .highlight {
      color: #ef4444;
      font-weight: 700;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">LAEVIX</div>
      <div class="tagline">Solutions That Scale</div>
    </div>
    
    <div class="content">
      <div class="greeting">Hey ${name}!</div>
      
      <div class="message">
        Thanks for reaching out to <span class="highlight">Laevix</span>!
      </div>
      
      <div class="message">
        We've received your message and our team is already on it. We'll get back to you within <span class="highlight">24 hours</span> to discuss how we can help bring your vision to life.
      </div>
      
      <div class="message">
        In the meantime, feel free to check out our portfolio and learn more about what we do.
      </div>
      
      <a href="https://laevix.org" class="cta-button">Visit Our Website</a>
      
      <div class="message">
        Looking forward to working together!
      </div>
      
      <div class="message">
        <strong>Team Laevix</strong><br>
        Building the Future, Today
      </div>
    </div>
    
    <div class="footer">
      Laevix Nepal | Future-Ready Technology<br>
      Email: pranavkattel333@gmail.com
    </div>
  </div>
</body>
</html>
`;

// Notification email template for yourself
const getNotificationHTML = (name, email, subject, message) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background-color: #ffffff;
      color: #000000;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 40px 20px;
    }
    .header {
      text-align: center;
      padding: 40px 0;
      border-bottom: 2px solid rgba(239, 68, 68, 0.2);
    }
    .logo {
      font-size: 32px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.05em;
      color: #000000;
      margin-bottom: 10px;
    }
    .alert {
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.4em;
      color: #ef4444;
      font-weight: 700;
    }
    .content {
      padding: 40px 0;
    }
    .title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 30px;
      color: #ef4444;
    }
    .field {
      margin-bottom: 24px;
      border-left: 3px solid #ef4444;
      padding-left: 20px;
    }
    .label {
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: #737373;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .value {
      font-size: 16px;
      color: #000000;
      line-height: 1.6;
    }
    .message-box {
      background-color: rgba(239, 68, 68, 0.05);
      border: 1px solid rgba(239, 68, 68, 0.2);
      padding: 20px;
      margin-top: 20px;
    }
    .footer {
      border-top: 1px solid rgba(239, 68, 68, 0.1);
      padding-top: 30px;
      text-align: center;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: #737373;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="logo">LAEVIX</div>
      <div class="alert">New Contact Form Submission</div>
    </div>
    
    <div class="content">
      <div class="title">New Message Received</div>
      
      <div class="field">
        <div class="label">From</div>
        <div class="value">${name}</div>
      </div>
      
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value">${email}</div>
      </div>
      
      <div class="field">
        <div class="label">Subject</div>
        <div class="value">${subject}</div>
      </div>
      
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">
          <div class="value">${message.replace(/\n/g, '<br>')}</div>
        </div>
      </div>
    </div>
    
    <div class="footer">
      Laevix Contact Form System<br>
      Received: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kathmandu' })} NPT
    </div>
  </div>
</body>
</html>
`;

// Send email endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'All fields are required' 
    });
  }

  try {
    // Send notification email to contact@laevix.org using admin@laevix.org
    await adminTransporter.sendMail({
      from: '"Laevix Contact Form" <admin@laevix.org>',
      to: 'contact@laevix.org',
      subject: `New Contact: ${subject}`,
      html: getNotificationHTML(name, email, subject, message),
      replyTo: email
    });

    // Send auto-reply to the sender using Zoho
    await zohoTransporter.sendMail({
      from: '"Laevix" <contact@laevix.org>',
      to: email,
      subject: 'Thanks for reaching out to Laevix!',
      html: getAutoReplyHTML(name)
    });

    res.json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Laevix Email Server Running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Laevix Email Server running on http://localhost:${PORT}`);
});
