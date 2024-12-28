export interface Exercise {
    name: string;
    sets: number;
    reps: number;
    weight: number;
}

export const defaultExercise: Exercise = {name: "", reps: 0, sets: 0, weight: 0};