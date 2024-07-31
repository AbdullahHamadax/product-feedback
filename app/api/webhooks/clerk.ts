// /pages/api/webhooks/clerk.ts

import { initialProfile } from '@/lib/create-profile';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { type, data } = req.body;

    if (type === 'user.created') {
      try {
        await initialProfile();  // Pass user ID to initialProfile function
        res.status(200).json({ message: 'Profile created' });
      } catch (error) {
        console.error('Error creating profile:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(400).json({ error: 'Unsupported event type' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
