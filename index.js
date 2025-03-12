const express = require("express");
const app = express();

const port = 8080;

app.get("/", (_,res)=>{
	res.send("hello, this is a sucesseful test expres node");
})

app.listen(port, ()=>{
	console.log('listening at port ' + port);
})

