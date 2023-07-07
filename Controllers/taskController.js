import task from "../Schemas/taskSchema.js";

//  Create A Task

export const createTask = async (req, res) => {
    const { taskName, status } = req.body;
    try {
        const createdTask = await task.create({ taskName, status })
        res.status(201).json({
            success: true,
            message: "Task Created Successfully",
            createdTask
        })
    } catch (error) {
        res.status(402).json({
            success: false,
            message: "Error while creating a Task " + error.message
        })
    }
}

// Get Tasks Status

export const getTasks = async (req, res) => {
    const query  = Query(req.query.status);
    console.log(query)
    try {
        const tasks = await task.find(query,{});
        res.status(200).json({
            success: true,
            tasks
        })
    } catch (error) {
        res.status(402).json({
            success: false,
            message: "Error while fetcing the task " + error.message
        })
    }
}

const Query = (status)=>{
    let query = {};
    if(status){
        query.status = {
            $regex:status,
            $options:"i"
        }
    }
    return query;
}