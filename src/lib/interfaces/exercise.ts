export interface Exercise {
    id: string;
    name: string;
    primary: string;
    secondary: string[];
}

export interface ExerciseTarget {
    exercise: Exercise
    sets: number;
    reps: number;
    weight: number;
}