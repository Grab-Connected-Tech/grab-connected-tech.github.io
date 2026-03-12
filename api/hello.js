// Example serverless API function
// Access this at: https://your-domain.vercel.app/api/hello

export default function handler(req, res) {
  res.status(200).json({
    message: 'Hello from Vercel serverless API!',
    timestamp: new Date().toISOString()
  });
}
