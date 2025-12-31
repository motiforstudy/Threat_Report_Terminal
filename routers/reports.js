import express from "express";
import { connectionDb } from "../connection_db/connection_db.js";
import "dotenv/config";
import { isGoodReq } from "../middleware/is_good_req.js";
import { log } from "node:console";

const reportsRouter = express();
const uri = process.env.URI;
const dbName = process.env.DB_NAME;
const db = await connectionDb(uri, dbName);

reportsRouter.post("/",isGoodReq ,async (req, res)=>{
    try{  
        const getBody = req.body;
        getBody["timestamp"] = new Date()
        console.log(getBody);
        const insertReport = await db.collection("intel_reports").insertOne(getBody)
        res.json({id: insertReport.insertedId})
    } catch (error){
        res.send(`the problem is on post /reports: ${error}`)
    }
})

reportsRouter.get("/", (req, res)=>{
    const getData = db
    res.send(getData)
})

export default reportsRouter