/**
 * 1. Creating an express server
 * 2. Connect to mongodb
 * 3. Initialize express
 * 4. Initialize express middleware
 * 5. Create a simple get request route
 * 6. Inject our routes
 * 7. Listen to our app connection
 */

const express = require("express");
const connectDB = require('./db')
require('dotenv').config() // allows us to use the environmental variables in .env
const { PORT } = process.env

// Connect to db
connectDB()

// Initialize express
const app = express()

// Initialize Express middleware
app.use(express.json({ extended: false }))

// Create a basic express route
app.get('/', (req, res) => res.json({ message: "Welcome to Tutoring app!" }))

// PORT
const port = process.env.PORT || PORT

// listen to connection
app.listen(port, () => console.log(`app running on port ${port}`))