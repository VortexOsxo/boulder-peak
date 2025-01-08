import { workouts } from "$lib/stores/workout/workouts";
import { get } from "svelte/store";

const exercises = [
    {
        "id": "pushups",
        "name": "Pushups",
        "primary": "chest",
        "secondary": [
            "triceps",
            "shoulders"
        ]
    },
    {
        "id": "pullups",
        "name": "Pullups",
        "primary": "lats",
        "secondary": [
            "biceps",
            "forarms"
        ]
    },
    {
        "id": "dumbbell-bench-press",
        "name": "Dumbbell Bench Press",
        "primary": "chest",
        "secondary": [
            "triceps",
            "shoulders"
        ]
    },
    {
        "id": "shoulder-press",
        "name": "Shoulder Press",
        "primary": "shoulders",
        "secondary": [
            "triceps",
            "chest"
        ]
    },
    {
        "id": "dumbbell-curls",
        "name": "Dumbbell Curls",
        "primary": "biceps",
        "secondary": [
            "forarms"
        ]
    },
    {
        "id": "dumbbell-rows",
        "name": "Dumbbell Rows",
        "primary": "lats",
        "secondary": [
            "biceps",
            "forarms"
        ]
    },
    {
        "id": "deadlifts",
        "name": "Deadlifts",
        "primary": "lats",
        "secondary": [
            "legs",
            "forarms"
        ]
    },
    {
        "id": "squats",
        "name": "Squats",
        "primary": "legs",
        "secondary": [
            "lats",
            "core"
        ]
    },
    {
        "id": "leg-press",
        "name": "Leg Press",
        "primary": "legs",
        "secondary": [
            "lats",
            "core"
        ]
    },
    {
        "id": "lat-pulldowns",
        "name": "Lat Pulldowns",
        "primary": "lats",
        "secondary": [
            "biceps",
            "forarms"
        ]
    },
    {
        "id": "dips",
        "name": "Dips",
        "primary": "triceps",
        "secondary": [
            "chest",
            "shoulders"
        ]
    },
    {
        "id": "machine-flys",
        "name": "Machine Flys",
        "primary": "chest",
        "secondary": []
    },
    {
        "id": "cable-lateral-raises",
        "name": "Cable Lateral Raises",
        "primary": "shoulders",
        "secondary": []
    },
    {
        "id": "dumbbell-lateral-raises",
        "name": "Dumbbell Lateral Raises",
        "primary": "shoulders",
        "secondary": []
    },
    {
        "id": "barbell-bicep-curls",
        "name": "Barbell Bicep Curls",
        "primary": "biceps",
        "secondary": [
            "forarms"
        ]
    },
    {
        "id": "cable-tricep-pushdowns",
        "name": "Cable Tricep Pushdowns",
        "primary": "triceps",
        "secondary": []
    },
    {
        "id": "machine-reverse-flys",
        "name": "Machine Reverse Flys",
        "primary": "shoulders",
        "secondary": ["lats"]
    },
    {
        "id": "dumbbell-inclined-bench-press",
        "name": "Dumbbell Inclined Bench Press",
        "primary": "chest",
        "secondary": [
            "triceps",
            "shoulders"
        ]
    },
    {
        "id": "barbell-inclined-bench-press",
        "name": "Barbell Inclined Bench Press",
        "primary": "chest",
        "secondary": [
            "triceps",
            "shoulders"
        ]
    },
    {
        "id": "dumbbell-shoulder-press",
        "name": "Dumbbell Shoulder Press",
        "primary": "shoulders",
        "secondary": [
            "triceps"
        ]
    },
    {
        "id": "dumbbell-front-raises",
        "name": "Dumbbell Front Raises",
        "primary": "shoulders",
        "secondary": []
    }
]

export function getExercises() {
    return exercises;
}

export function getExercise(id: string) {
    return exercises.find(exercise => exercise.id === id);
}

export function getExerciseLogs(exerciseId: string) {
    const logs: any[] = [];
    for (const workout of get(workouts).reverse()) {
        for (const exercise of workout.exercises) {
            if (exercise.id === exerciseId) logs.push({ date: workout.date, sets: exercise.sets });
        }
    }

    console.log(logs);

    return logs;
}

export function getExerciseLastTarget(exerciseId: string) {
    for (const workout of get(workouts).reverse()) {
        for (const exercise of workout.exercises) {
            if (exercise.id === exerciseId)
                return { sets: exercise.sets.length, reps: exercise.sets[0].reps, weight: exercise.sets[0].weight };
        }
    }
    return { sets: 3, reps: 12, weight: 50 };
}