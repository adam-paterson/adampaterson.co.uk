import type { HttpFunction } from '@google-cloud/functions-framework';

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
  // Enable CORS
  res.set('Access-Control-Allow-Origin', 'https://www.adampaterson.co.uk');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const data = req.body as ContactFormData;

    // Validate required fields
    if (!data.name || !data.email || !data.message || !data.contact_reason) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    // Construct email content
    const emailContent = `
      New Contact Form Submission
      
      Contact Reason: ${data.contact_reason}
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}
      ${data.company ? `Company: ${data.company}` : ''}
      ${data.current_stack ? `Current Tech Stack: ${data.current_stack}` : ''}
      ${data.platform ? `E-commerce Platform: ${data.platform}` : ''}
      ${data.current_revenue ? `Current Revenue: ${data.current_revenue}` : ''}
      ${data.position_type ? `Position Type: ${data.position_type}` : ''}
      ${data.timeline ? `Timeline: ${data.timeline}` : ''}
    `.trim();

    // Log the submission for monitoring
    console.log('Contact form submission:', emailContent);

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};