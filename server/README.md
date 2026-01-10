# Email Server Setup

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

## Running the Server

To start the email server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The server will run on http://localhost:3001

## Email Configuration

The server is configured to:
- Send notification emails to: pranavkattel333@gmail.com
- Send auto-reply emails to form submitters
- Use Gmail SMTP with app password authentication

## Email Templates

Both emails match your website theme with:
- Black background (#000000)
- Red accents (#ef4444)
- Modern typography
- Professional layout

### Auto-Reply Email
Sent to users who submit the form, confirming receipt of their message.

### Notification Email
Sent to you with the full form submission details.

## Testing

Make sure the server is running before submitting the contact form on your website.

## Important Notes

- The Gmail app password is already configured
- Keep the server running while using the contact form
- Both emails will be sent automatically when a form is submitted
