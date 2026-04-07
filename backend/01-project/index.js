import express from 'express';
import mongoDB from "./db/DB.js"

const app = express();

const PORT = 3000;

mongoDB();

app.get("/first",(req,res)=>{
    res.send("hello this is my first api")
})

app.listen(PORT, ()=>{
    console.log('server is running')
})