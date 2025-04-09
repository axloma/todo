const {MongoClient} = require("mongodb")
require("dotenv").config({ path: "./config.env"})
const express = require('express')
const cors = require('cors')



async function main(){
    let items;
    const db = process.env.ATLAS_URI
    //create client to connect to db
    const client = new MongoClient(db)
    try{
    await client.connect() //TODO connect to mongodb

    const collections = await client.db("dbname").collections()//TODO greap all collection from db
    //TODO print all collection
    collections.forEach((collection)=>console.log(collection.s.namespace.collection))
    console.log("END")
    const db = client.db("dbname");
    const coll = db.collection("courses");
    items =  coll.find({}).toArray();
    const itemsx = await client.db("dbname").collection("users").find().toArray()
    console.log(itemsx ,"ONE LINE ") //TODO get all items
    console.log(items ,"SEPREATED ") //TODO get all items in collection
    

    }catch(e){
        console.error(e)

    }finally{
        await client.close() //TODO close connection after done 
    }
  return( items )  ;

} 



// console.log(all,"ALLLLLl")
const app = express()
app.use(express.json());
app.use(cors())
port = process.env.PORT || 3000;

app.get('/',async (req,res)=>{
let all = await main()
// res.status(200).json(all)
res.send(all)

});

app.listen(port,console.log("LISTEN ON 3000"))




module.exports = main
// module.exports = main