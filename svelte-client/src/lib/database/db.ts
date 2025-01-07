import { DATABASE_URI } from "$env/static/private";
import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    let client = new MongoClient(DATABASE_URI);
    await client.connect();
    let db = client.db('database');

    return db;
}