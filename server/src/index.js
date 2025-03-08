const express = require("express")


const app = express();


app.use(express.json())


//app.use(cors())


app.use(express.static(__dirname + "/../dist/"))




app.get("/", (req, res) => {
   res.sendFile(__dirname + "/../dist/index.html")
})


app.get("/cat", (req, res) => {
   res.json( {name: "cat", sound: "meow"} )
})


app.post("/create_song", (req, res) => {


  console.log(req.body)
  res.json({error:false})
})




app.listen(3000, ()=> {
   console.log("Server Up!")
})


