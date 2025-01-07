import { connectToDatabase } from "$lib/database/db";

export async function fetchWorkouts(userId: string) {
    const db = await connectToDatabase();
    const workoutsCollection = db.collection("workouts");

    let workouts = await workoutsCollection.find({ 'user_id': userId }).toArray() as any;
    workouts = workouts.map((workout: any) => {
        const { _id, ...w } = { id: String(workout._id), ...workout };
        return w;
    });
    return workouts;
}

export async function logWorkout(workout: any) {
    const db = await connectToDatabase();
    const workoutsCollection = db.collection("workouts");

    await workoutsCollection.insertOne(workout);
}
