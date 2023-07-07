import mongoose from "mongoose";

const taskModel = new mongoose.Schema({
    taskName:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

const task = mongoose.model("task",taskModel);

export default task;