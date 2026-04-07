import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: [true, "user name is required"]
    },
    userEmail: {
        type: String,
        require: [true, "user email is required"]
    },
    userpassword: {
        type: String,
        require: [true, "user password is required"]
    },
});

const User = mongoose.model("User", userSchema)

export default User;