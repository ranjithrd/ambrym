const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const { db } = require("./db")

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.set("view engine", "pug")
app.set("views", __dirname + "/views")

app.get("/", (req, res) => {
	res.render("pages/index")
})

const PORT = process.env.PORT || 1918
app.listen(PORT, () => {
	console.log(`App started on ${PORT}.`)
})
