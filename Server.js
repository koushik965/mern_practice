const express = require('express');
const app = express();

const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

app.use(express.json());

connectDB();

app.use('/students', studentRoutes);

app.listen(3000, () => {
console.log("Server is running on port 3000 Successfully");
});

