import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import connectToDb from './Config/Database.js';
import cors from 'cors'
import taskRouter from './Routes/taskRoute.js';

const app = express();
dotenv.config({path:"../Backend/Config/config.env"})
connectToDb()
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.json({limit:"10mb"}))
app.use(cors({
    origin:"*",
}))

app.use("/",taskRouter)



app.listen(process.env.PORT,()=>{
    console.log("App is listening on port " + process.env.PORT)
})