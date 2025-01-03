from flaskr.db import get_collection

class WorkoutService:
    @staticmethod
    def get_workouts(user_id: str):
        workouts_collection = get_collection('workouts')
        return list(workouts_collection.find({'user_id': user_id}, {'_id': 0}))