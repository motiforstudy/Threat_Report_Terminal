import { MongoClient } from "mongodb";

let db;
let client;

export async function connectionDb(uri, dbName){
    try{
        if (db){
            return db
        }
        client = new MongoClient(uri);
        await client.connect();
        db = client.db(dbName)
        console.log("MongoDB connected:", db.databaseName);
        return db
    } catch (error){
        console.log("the error is in connection:", error);
    }
}