// everything mongo db goes here

import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri);
const DATABASE_NAME = 'portfolio_db';

    try{
        await client.connect();
        await client.db('admin').command({ping: 1})
        console.log ("You have successfully connected to MongoDB!")
    } catch (error){
        console.log('Error connecting to the database', error);
    }

    let db = client.db(DATABASE_NAME);
   
    export default db;