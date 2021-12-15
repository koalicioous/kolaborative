import { NextApiRequest, NextApiResponse } from 'next';
// import supabase from '../../lib/supabase/client';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(req.body.params);
}
