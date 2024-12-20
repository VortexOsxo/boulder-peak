from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from env import mongo_username, mongo_password

def create_client():
    uri = f"mongodb+srv://{mongo_username}:{mongo_password}@cluster0.t8rhv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    return MongoClient(uri, server_api=ServerApi('1'))



try:
    client = create_client()
    db = client['database']

    collection = db.create_collection('users')

except Exception as e:
    print(e)