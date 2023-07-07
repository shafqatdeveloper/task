import mongoose from "mongoose"

const connectToDb =async ()=>{
   try {
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    console.log("Connected to Database Successfully")
   } catch (error) {
    console.log("Error connecting to Database", error)
   }
}

export default connectToDb;