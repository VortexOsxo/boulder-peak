import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from "$env/static/private";

export function createToken(userId: string) {
    return jwt.sign({ userId }, JWT_SECRET_KEY, { expiresIn: '1h' });
}

export function validateToken(token: string): string {
    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY) as { userId: string };
        return decoded.userId || '';
    } catch (error) {
        return '';
    }
}