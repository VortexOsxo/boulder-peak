export interface Set {
    reps: number;
    weight: number;
    done: boolean;
}

export const defaultSet: Set = { reps: 0, weight: 0, done: false };