const express = require('express');
const mongoose = require('mongoose');
const cors=require("cors")

const app = express();
const port = 3001;
const connectDb = require("./config/dbconfig");
connectDb()
app.use(cors())





// Replace 'your_mongodb_atlas_connection_string' with your MongoDB Atlas connection string

const Users=require('./models/userModel')


app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/products"));

app.get('/', (req, res) => {
  res.send('Helloffko World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
