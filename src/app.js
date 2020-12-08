const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect('mongodb://localhost:27017/institutions', {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

let db = mongoose.connection;

db.on('error', console.log.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Conexão feita com sucesso!')
});

const index = require("./routes/index");
const institutions = require("./routes/institutionsRoute");

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
      )
      next()
    });
    
app.use("/", index);
app.use("/institutions", institutions);
  
module.exports = app;