import { connectToDatabase } from '$lib/database/db';
import { verifyPassword } from '$lib/services/password-hashing';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '../$types';
import { createToken } from '$lib/services/jwt';

export const actions = {
    login: async (event) => {
        const formData = await event.request.formData();
        const username = formData.get('username');
        const password = formData.get('password');

        let db = await connectToDatabase();
        let users_collection = db.collection('users')

        let user = await users_collection.findOne({ "username": username });
        if (!user || !(await verifyPassword(password as string, user.password)))
            return fail(400, { error: 'Wrong username or password' });

        event.cookies.set("auth_token", createToken(String(user._id)), { path: "/" });
        redirect(303, "/");
    }

} satisfies Actions;