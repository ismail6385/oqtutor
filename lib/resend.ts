import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY || 're_123456789'; // Fallback to prevent crash on import
export const resend = new Resend(apiKey);
