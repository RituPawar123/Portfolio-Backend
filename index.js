const express=require('express');
const http=require('http');
const bodyParser = require("body-parser");
const userRouter = require("./userRouter");
const hostname="0.0.0.0";
const port = process.env.PORT || 5000;
const app=express();
app.use('/api/sendMail',userRouter)
app.use((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end(`<html>
    <title>This is index.html</title>
    <body>
    <h1>Index.HTML</h1>
    <p>This is the contents of this file</p>
    </body>
    </html>`)
});

const server =http.createServer(app);

server.listen(port,()=>{
    console.log("Server Running")
})