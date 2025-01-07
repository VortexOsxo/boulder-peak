import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
    const userId = locals.userId;

    if (!userId) return redirect(303, "/login");
}