require("dotenv").config();
const express = require("express");
const massive = require("massive");
const recipeCtrl = require("./recipeCtrl")


const app = express();
app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  }).catch(err => console.log(err));




app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
});