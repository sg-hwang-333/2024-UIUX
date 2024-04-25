const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors({
    origin : "http://127.0.0.1:5500",
    credentials:true,
}));

app.get("/", (req,res) => {

    const jsondata = new Array();
    jsondata.push({"name":"rodang"});
    jsondata.push({"name":"hongsam"});
    jsondata.push({"name":"candy"});
    jsondata.push({"name":"dodduk"});


    res.send(jsondata);
})
app.post("/", (req,res) => {

    const jsondata = new Array();
    jsondata.push({"name":"1rodang"});
    jsondata.push({"name":"2hongsam"});
    jsondata.push({"name":"3candy"});
    jsondata.push({"name":"4dodduk"});


    res.send(jsondata);
})

app.listen(3002);