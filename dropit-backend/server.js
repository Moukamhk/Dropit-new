const express = require("express")
const mysql = require("mysql2")
const bcrypt = require("bcrypt")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Samuelly25@",
  database: "dropit",
})

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err)
    return
  }
  console.log("Connected to the database")
})

app.post("/api/signup", async (req, res) => {
  const { username, email, phone, password, address, city, dateOfBirth } = req.body

  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const query =
      "INSERT INTO user (name, email, phone, password, address, city, date_of_birth) VALUES (?, ?, ?, ?, ?, ?, ?)"
    db.query(query, [username, email, phone, hashedPassword, address, city, dateOfBirth], (err, result) => {
      if (err) {
        res.status(500).json({ success: false, message: "Error creating user" })
      } else {
        res.status(201).json({ success: true, message: "User created successfully" })
      }
    })
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating user" })
  }
})

app.post("/api/login", (req, res) => {
  const { email, password } = req.body

  const query = "SELECT * FROM user WHERE email = ?"
  db.query(query, [email], async (err, results) => {
    if (err) {
      res.status(500).json({ success: false, message: "Error logging in" })
    } else if (results.length === 0) {
      res.status(401).json({ success: false, message: "Invalid email or password" })
    } else {
      const user = results[0]
      const passwordMatch = await bcrypt.compare(password, user.password)
      if (passwordMatch) {
        res.status(200).json({ success: true, message: "Login successful" })
      } else {
        res.status(401).json({ success: false, message: "Invalid email or password" })
      }
    }
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

