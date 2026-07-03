const express = require("express");
const app = express();

app.use(express.static("frontend"));

const PORT =  process.env.PORT ||3002;

app.listen(PORT, function(){
    console.log("Server Running at http://localhost:" + PORT);
})