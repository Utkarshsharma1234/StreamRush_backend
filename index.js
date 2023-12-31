const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies")
const listRoute = require("./routes/lists")
const cors = require("cors");
const PORT = process.env.PORT || 8000;

dotenv.config();

mongoose.connect(`${process.env.MONGO_URL}`,{
})
.then(()=> console.log("connected to moongodb!"))
.catch((err)=>console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute)
app.use("/api/movies", movieRoute)
app.use("/api/lists", listRoute)

app.listen(PORT, ()=>{
    console.log(PORT);
    console.log("Connected to backend");
})