import { json } from '@sveltejs/kit';
import { connectToDatabase } from '$lib/database/db';
import { fetchWorkouts } from '$lib/services/workouts.js';

export async function POST({ request, cookies }) {
    const { date, duration, exercises } = await request.json();

    const userId = cookies.get('auth_token');
    if (!userId) {
        return json({ error: 'Unauthorized' }, { status: 401 });
    }

    const db = await connectToDatabase();
    const collection = db.collection('workouts');

    await collection.insertOne({ date, duration, exercises, user_id: userId });
    return json({ success: true });
}

export async function GET({ cookies }) {
    const auth_token = cookies.get('auth_token');
    if (!auth_token)
        return json({ error: 'Unauthorized' }, { status: 401 });

    let workoutSchemas = await fetchWorkouts(auth_token);
    return json(workoutSchemas);
}