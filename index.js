const express = require("express");

require("dotenv").config({
    path: `${__dirname}/.env`
})

const app = express();

app.get("/api/v1/prueba", (req, res) => {
    res.json({
        message: "good"
    })
})

app.listen(process.env.PORT, console.log("server listening on port " + process.env.port));