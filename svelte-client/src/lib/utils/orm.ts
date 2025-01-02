export function oneRepMax(weight: number, reps: number) {
    // use the Epley formula
    return weight * (1 + reps/30);
}