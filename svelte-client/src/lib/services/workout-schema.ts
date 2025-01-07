import { connectToDatabase } from "$lib/database/db";

export async function fetchWorkoutSchemas(userId: string) {
    const db = await connectToDatabase();
    const collection = db.collection('workout-schemas');
    return await collection.find({"user_id": userId}, { projection: { _id: 0 } }).toArray() as any;
} 