import mongoose from "mongoose";


export async function Connect (){
    try {
        mongoose.connect(process.env.MONGO_URI!)
        console.log(process.env.MONGO_URI!)

        const connection = mongoose.connection

        connection.on('connect',()=>{
            console.log('Connected to database successfully')
        })
        connection.on('error',(err)=>{
            console.log('Could not connect to database...!'+err);
            process.exit()
        })

    } catch (error) {
        console.log('Something went wrong');
        console.log(error)
    }
}
