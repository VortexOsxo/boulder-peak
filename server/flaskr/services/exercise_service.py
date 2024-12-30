import json

class ExerciseService:
    @staticmethod
    def get_exercises():
        exercises_file_path = './exercises.json'
        with open(exercises_file_path, 'r') as file:
            exercises = json.load(file)
        return exercises
    
    @staticmethod
    def get_execise_by_id(id: str):
        exercises = ExerciseService.get_exercises()
        return next((exercise for exercise in exercises if exercise['id'] == id), None)
