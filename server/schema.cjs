const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')
const xss = require('xss-clean')
require("dotenv").config({ path: "./config.env"})
const db = process.env.ATLAS_URI
// mongoose.connect(db);

const app = express()
app.use(express.json());
app.use(cors());
// app.use(xss());
port = process.env.PORT || 3000;

function main(){
   
    //connect to db
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.log('Could not connect to MongoDB...', err));


    app.listen(port,console.log("LISTEN on port 3000"))
}
// main()

const mageSchema = new mongoose.Schema({
  name: {
      type: String,
      require: true
  },
  completed: {
      type: Boolean,
      require: true
  },
  Ts: Number,
})
//Create the Model Using the Schema
const Mage = mongoose.model('Mage', mageSchema);



// mega2.save();

module.exports = {Mage,app,main}
