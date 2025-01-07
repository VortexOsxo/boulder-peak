import { connectToDatabase } from '$lib/database/db';
import { hashPassword } from '$lib/services/password-hashing';
import type { Actions } from '../$types';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async (event) => {
        const formData = await event.request.formData();

        const username = formData.get('username');
        const password = formData.get('password');

        let db = await connectToDatabase();
        let users_collection = db.collection('users')

        try {
            await users_collection.insertOne({
                'username': username,
                'password': await hashPassword(password as string)
            });
        } catch {
            return fail(400, { error: 'Username already taken' })
        }

        redirect(303, "/login");
    }

} satisfies Actions;
