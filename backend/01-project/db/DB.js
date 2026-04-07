import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connect("mongodb://admin:password@127.0.0.1:27017")
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