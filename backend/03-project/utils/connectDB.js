import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
            .then( () => {
                console.log("Connected to DB");
            })
            .catch((error) => {
                console.log(`connection error ${error}`)
            })
    } 
    catch (error) {
        console.log(`connection error ${error}`)
    }
}  

export default connectDB;