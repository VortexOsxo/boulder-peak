import { validateToken } from '$lib/services/server/jwt';
import { type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const auth_token = event.cookies.get('auth_token');

    event.locals.userId = validateToken(auth_token ?? '');
	return await resolve(event);
};