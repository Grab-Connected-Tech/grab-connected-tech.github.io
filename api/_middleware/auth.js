// Simple API key authentication middleware
// For iOS app, you'll send this key in the Authorization header

export function authenticateRequest(req) {
  const authHeader = req.headers.authorization;
  const apiSecret = process.env.API_SECRET_KEY;

  if (!authHeader) {
    return { authenticated: false, error: 'Missing authorization header' };
  }

  // Expected format: "Bearer YOUR_SECRET_KEY"
  const token = authHeader.replace('Bearer ', '');

  if (token !== apiSecret) {
    return { authenticated: false, error: 'Invalid API key' };
  }

  return { authenticated: true };
}

// CORS helper for iOS app
export function setCorsHeaders(res, req) {
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Max-Age', '86400');

  return res;
}
