export interface Workout {
    id: string;
    user_id: string;
    date: Date;
    exercises: {id:string; sets: { reps: number; weight: number }[]}[];
}