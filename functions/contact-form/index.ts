import type { HttpFunction } from '@google-cloud/functions-framework';
import { google } from 'googleapis';

interface ContactFormData {
  contact_reason: string;
  name: string;
  email: string;
  message: string;
  company?: string;
  current_stack?: string;
  platform?: string;
  current_revenue?: string;
  position_type?: string;
  timeline?: string;
}

export const handleContactForm: HttpFunction = async (req, res) => {
  // CORS headers
  res.set('Access-Control-Allow-Origin', 'https://www.adampaterson.co.uk');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const data: ContactFormData = req.body;

    // Basic validation
    if (!data.name || !data.email || !data.message || !data.contact_reason) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    // Initialize Gmail API
    const auth = new google.auth.GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/gmail.send'],
    });
    const gmail = google.gmail({ version: 'v1', auth });

    // Construct email content
    const emailContent = `
      New Contact Form Submission
      
      Contact Reason: ${data.contact_reason}
      Name: ${data.name}
      Email: ${data.email}
      ${data.company ? `Company: ${data.company}` : ''}
      ${data.current_stack ? `Current Tech Stack: ${data.current_stack}` : ''}
      ${data.platform ? `Platform: ${data.platform}` : ''}
      ${data.current_revenue ? `Current Revenue: ${data.current_revenue}` : ''}
      ${data.position_type ? `Position Type: ${data.position_type}` : ''}
      ${data.timeline ? `Timeline: ${data.timeline}` : ''}
      
      Message:
      ${data.message}
    `;

    // Create email message
    const message = [
      'Content-Type: text/plain; charset="UTF-8"',
      'MIME-Version: 1.0',
      'Content-Transfer-Encoding: 7bit',
      'to: hello@adampaterson.co.uk',
      'from: noreply@adampaterson.co.uk',
      `subject: Contact Form: ${data.contact_reason}`,
      '',
      emailContent
    ].join('\n');

    // Send email
    await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: Buffer.from(message).toString('base64url'),
      },
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}; 