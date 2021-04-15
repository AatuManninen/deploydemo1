const express = require("express");
const app = express();

const portti = process.env.PORT || 8000;

app.use(express.static("./Public"));

app.listen(portti,  ()  =>  {

console.log("Palvelin käynnistyi.");

})