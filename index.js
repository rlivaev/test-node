import express from "express";


const PORT = 3000;

const app = express();
app.get("/", (req,res)=>{res.send("Сервер работает")})

app.listen(PORT, ()=> console.log("Server has been started on Port 3000....."));