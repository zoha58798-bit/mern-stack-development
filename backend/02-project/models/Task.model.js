import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Title is required"]
    },
    description: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: [true, "User reference is required"]
    },
});

const Task = mongoose.model("Task", userSchema)

export default Task;
