import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://cofferUser:admin@cluster0.s3wwj.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri,{
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



