import { json } from '@sveltejs/kit';
import { connectToDatabase } from '$lib/database/db';
import { fetchWorkoutSchemas } from '$lib/services/workout-schema';

export async function POST({ request, cookies }) {
    const { name, exercises } = await request.json();

    const auth_token = cookies.get('auth_token');
    if (!auth_token) {
        return json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!name || !exercises)
        return json({ error: 'Name and exercises are required' }, { status: 400 });

    const db = await connectToDatabase();
    const collection = db.collection('workout-schemas');

    await collection.insertOne({ name, exercises, user_id: auth_token });
    return json({ success: true });
}

export async function GET({ cookies }) {
    const auth_token = cookies.get('auth_token');
    if (!auth_token)
        return json({ error: 'Unauthorized' }, { status: 401 });

    let workoutSchemas = await fetchWorkoutSchemas(auth_token);
    return json(workoutSchemas);
}
