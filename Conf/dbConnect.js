import mongoose from "mongoose";

const connectDb = async () => {
    try {
       const connection = await mongoose.connect(process.env.MONGO_URI);
       if(!connection){
         console.log("connection error")
       }
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default connectDb