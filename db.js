import {MongoClient} from "mongodb"
//to get data using ObjectId class
import Obj from "mongodb"

const MongoURL = "mongodb+srv://ajay15:ajay15@cluster0.c76i2k0.mongodb.net/?retryWrites=true&w=majority"

async function createConnection(){
   const client = new MongoClient(MongoURL);        
    await client.connect()                          
    console.log("MongoDB is connected Sucessfully")
    return client
}

export var ObjectId = Obj.ObjectId;                 
export const client = await createConnection();     
