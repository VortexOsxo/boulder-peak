import { json } from '@sveltejs/kit';
import { connectToDatabase } from '$lib/database/db';
import { fetchWorkoutSchemas } from '$lib/services/server/workout-schema';

export async function POST({ request, locals }) {
    const { name, exercises } = await request.json();

    if (!name || !exercises)
        return json({ error: 'Name and exercises are required' }, { status: 400 });

    const db = await connectToDatabase();
    const collection = db.collection('workout-schemas');

    await collection.insertOne({ name, exercises, user_id: locals.userId });
    return json({ success: true });
}

export async function GET({ locals }) {
    let workoutSchemas = await fetchWorkoutSchemas(locals.userId);
    return json(workoutSchemas);
}
