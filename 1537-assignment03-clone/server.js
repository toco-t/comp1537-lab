const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://Toco:31hPJ6x0MUeJvCaj@cluster0.f0pqe.mongodb.net/unincorns")

var condition = null;

const unicornSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Unicorn need a name!"
  },
  weight: Number,
  loves: [String]
});

const Unicorn = mongoose.model("Unicorn", unicornSchema)

// const unicorn = new Unicorn({
//   name:
//   weight:
//   loves:
// })
//
// unicorn.save()

app.listen(process.env.PORT || 5000, function(err){
  if(err) {
    console.log(err);
  } else {
    console.log("Server is running on port 5000...");
  }
})

app.post("/name", function(req, res){
  let name = req.body.name;
  console.log("Successfully received the request");
  condition = {name: name}

  Unicorn.find(condition, function(err, unicorns){
    results = unicorns;
    if (err) {
      console.log(err);
    } else {
      console.log(unicorns);
    }
    res.send(unicorns);
  })
})

app.post("/food", function(req, res){
  let apple = req.body.apple;
  let carrot = req.body.carrot;
  console.log("Successfully received the request");
  let favourites = []

  if (apple == "checked")
    favourites.push("apple")
  if (carrot == "checked")
    favourites.push("carrot")

  if (favourites.length == 2) {
    condition = {$and: [{loves: "apple"},{loves: "carrot"}]}
  } else {
    condition = {loves: {$in: favourites}}
  }

  Unicorn.find(condition, function(err, unicorns){
    results = unicorns;
    if (err) {
      console.log(err);
    } else {
      console.log(unicorns);
    }
    res.send(unicorns);
  })
})

app.post("/weight", function(req, res){
  let lowest = req.body.lowest;
  let highest = req.body.highest;
  console.log("Successfully received the request");
  condition = {weight: {$gt: lowest, $lt: highest}}

  Unicorn.find(condition, function(err, unicorns){
    if (err) {
      console.log(err);
    } else {
      console.log(unicorns);
    }
    res.send(unicorns);
  })
})
