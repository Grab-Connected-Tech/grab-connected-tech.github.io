# Serverless API Documentation

## Setup

### Local Development
1. Copy `.env.example` to `.env.local`
2. Fill in your actual API keys and secrets
3. Run `npm start` to test locally

### Vercel Deployment
1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add each variable from `.env.example` with your actual values
5. Redeploy your app

## API Endpoints

### Protected Endpoints (Require Authentication)

#### GET /api/protected-data
Returns data from third-party APIs without exposing your API keys.

**Headers:**
```
Authorization: Bearer YOUR_SECRET_KEY
```

**Response:**
```json
{
  "success": true,
  "data": { ... }
}
```

## iOS App Integration

In your iOS app, store the `API_SECRET_KEY` securely and include it in requests:

```swift
var request = URLRequest(url: url)
request.setValue("Bearer \(apiSecretKey)", forHTTPHeaderField: "Authorization")
```

## Security Notes

- Never commit `.env.local` to git
- API keys are only accessible server-side
- iOS app only needs to know the `API_SECRET_KEY`
- Third-party API keys remain hidden on the server
