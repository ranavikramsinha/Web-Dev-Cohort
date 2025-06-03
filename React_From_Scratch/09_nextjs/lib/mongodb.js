import mongoose from "mongoose";

if(process.env.MONGO_URI){
    throw new error("Please define the MONGO_URI environment variable inside .env.local");
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {conn: null, promise: null}
}


async function connectToDatabase(){
    if(cached.conn){
        return cached.conn;
    }

    if(!cached.promise){
        const opts = {
            bufferCommands: false,
        }
        cached.promise = mongoose.connect(process.env.MONGO_URI, opts)
        .then((mongoose) => {
            return mongoose;
        })
    }

    try {
        cached.conn = await cached.promise
    } catch (error) {
        cached.promise = null
    }

    return cached.conn;
}

export default connectToDatabase;