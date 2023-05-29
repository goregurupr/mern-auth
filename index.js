const express = require("express")
require("dotenv").config({ path: "./.env" })
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URL)
const cors = require("cors")
const app = express()
// Body Parser
app.use(express.json())
app.use(cors({
    // origin: "https://auth-uwif.onrender.com"
    origin: "http://localhost:5173"
}))

app.use("/api/user", require("./routes/userRoute"))

const PORT = process.env.PORT || 5000

mongoose.connection.once("open", () => {
    console.log("DB CONNECTED")
    app.listen(PORT, console.log(`http://localhost:${PORT}`))
})
