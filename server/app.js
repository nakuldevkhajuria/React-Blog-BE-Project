const express = require("express")
const socket = require("socket.io")
const cors = require('cors')


const app = express();


// const io = socket(server,{
//   cors:{origin:'*'}
// })
app.use(cors({origin:'*'}))

app.get("/",(req,res)=>{
  console.log('this is the home')
  res.send("Hello from the server!")
})
app.get("/bollywood",(req,res)=>{
  console.log('this is the bollywood')
  res.send("Hello from the Bollywood route!")
})

// const server = 
app.listen(8080, ()=>{
  console.log('The server is running on port 8080')
})
// io.on("connection",(socket)=>{


//   socket.on("disconnect", () => {
//     console.log('A client socket is disconnected')
//   })
// })





