// Protected endpoint that uses hidden API keys
// Your iOS app will call this instead of calling third-party APIs directly

import { authenticateRequest, setCorsHeaders } from './_middleware/auth.js';

export default async function handler(req, res) {
  // Handle CORS preflight
  setCorsHeaders(res, req);
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Authenticate the request
  const auth = authenticateRequest(req);
  if (!auth.authenticated) {
    return res.status(401).json({ error: auth.error });
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Access your hidden API key from environment variables
    const apiKey = process.env.THIRD_PARTY_API_KEY;

    // Example: Call a third-party API with your hidden key
    // const response = await fetch('https://api.example.com/data', {
    //   headers: {
    //     'Authorization': `Bearer ${apiKey}`
    //   }
    // });
    // const data = await response.json();

    // For now, return a success response
    res.status(200).json({
      success: true,
      message: 'This endpoint is protected and uses hidden API keys',
      data: {
        // Your actual data would go here
        example: 'data from third-party API'
      }
    });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
