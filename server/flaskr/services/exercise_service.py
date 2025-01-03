import json
from .workout_service import WorkoutService

class ExerciseService:
    @staticmethod
    def get_exercises():
        exercises_file_path = './exercises.json'
        with open(exercises_file_path, 'r') as file:
            exercises = json.load(file)
        return exercises
    
    @staticmethod
    def get_exercise(id: str):
        exercises = ExerciseService.get_exercises()
        return next((exercise for exercise in exercises if exercise['id'] == id), None)

    @staticmethod
    def get_exercise_logs(user_id: str, exercise_id: str):
        workouts = WorkoutService.get_workouts(user_id)
        
        logs = []
        for workout in workouts:
            for exercise in workout['exercises']:
                if exercise['id'] == exercise_id:
                    logs.append({ 'date': workout['date'], 'sets': exercise['sets'] })
        return logs
    
    @staticmethod
    def get_exercise_last_target(user_id: str, exercise_id: str):
        workouts = WorkoutService.get_workouts(user_id)
        
        for workout in workouts:
            for exercise in workout['exercises']:
                if exercise['id'] == exercise_id:
                    return { 'sets': len(exercise['sets']), 'reps': exercise['sets'][0]['reps'], 'weight': exercise['sets'][0]['weight'] }
        return { 'sets': 3, 'reps': 12, 'weight': 50 }
        