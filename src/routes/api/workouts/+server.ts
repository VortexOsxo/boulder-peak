import { json } from '@sveltejs/kit';
import { connectToDatabase } from '$lib/database/db';
import { fetchWorkouts } from '$lib/services/server/workouts.js';

export async function POST({ request, locals }) {
    const { date, duration, exercises } = await request.json();
    const db = await connectToDatabase();
    const collection = db.collection('workouts');

    await collection.insertOne({ date, duration, exercises, user_id: locals.userId });
    return json({ success: true });
}

export async function GET({ locals }) {
    let workoutSchemas = await fetchWorkouts(locals.userId);
    return json(workoutSchemas);
}