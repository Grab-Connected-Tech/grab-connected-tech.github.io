// Contact form API endpoint
// POST to: https://your-domain.vercel.app/api/contact

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Here you would typically:
    // - Send an email
    // - Save to a database
    // - Send to a third-party service
    
    console.log('Contact form submission:', { name, email, message });

    res.status(200).json({
      success: true,
      message: 'Thank you for contacting us!'
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
