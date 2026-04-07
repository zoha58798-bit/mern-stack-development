import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./utils/connectDB.js";
import userRouter from './routes/user.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());                          // ✅ JSON body parse
app.use(express.urlencoded({ extended: true }));  // ✅ Form data parse

connectDB();

app.use("/api/v1/users", userRouter);

app.listen(PORT, ()=>{
    console.log('server is running')
})