import express from "express";
import reportsRouter from "./routers/reports.js";

const app = express();
app.use(express.json());

app.use("/reports", reportsRouter);

app.listen(3000, ()=>{
    console.log("the server is ready: ");
})