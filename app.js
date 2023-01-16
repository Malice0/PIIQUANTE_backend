const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect('mongodb+srv://Malice:Anna2002@cluster0.s6h1ebv.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  console.log("ok ok");
  next();
});

app.post("/api/auth/signup", (req, res) => {
    
})

app.use((req, res) => {
  res.send("hello, express ! Malice.");
});

module.exports = app;
