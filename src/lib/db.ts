// nextjs jitne baar request utne baar database connect karega isliye hum ek baar connection bana ke usko reuse karenge catch mei store karkei

import { connect } from "mongoose";

const mongo_uri=process.env.MONGODB_URI
if(!mongo_uri){
    console.log("MONGODB_URI is not defined in environment variables");
}

let cache=global.mongoose
if(!cache){
    cache=global.mongoose={conn:null,promise:null}
}


const connectDb=async()=>{
if(cache.conn){
    return cache.conn;
}
if(!cache.promise){
    cache.promise=connect(mongo_uri!).then((c)=>c.connection)
}

try {
    cache.conn=await cache.promise
} catch (error) {
    console.log("Error connecting to database:", error);
}
return cache.conn;
}


export default connectDb;