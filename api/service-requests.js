import { storage } from '../server/storage.js';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // TODO: SEC-01 Implement Admin Session Auth
  const authHeader = req.headers.authorization;
  // Placeholder logic matching server/routes.ts
  if (!authHeader || authHeader !== "Bearer admin-secret") {
     return res.status(401).json({ message: "Unauthorized: Access Denied" });
  }

  if (req.method === 'GET') {
    try {
      const requests = await storage.getServiceRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch service requests" 
      });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
