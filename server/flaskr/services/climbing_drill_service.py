import json
from random import choice

class ClimbingDrillService:
    @staticmethod
    def get_drills():
        drills_file_path = './drills.json'
        with open(drills_file_path, 'r') as file:
            drills = json.load(file)
        return drills
    
    @staticmethod
    def get_random_drill():
        return choice(ClimbingDrillService.get_drills())

        