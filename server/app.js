const express = require('express');
const app = express();
const connection = require('./db /connect'); // Corrected path
const router = require('./Routes/Route'); // Ensure this path is correct
const cors = require('cors')


const port = 8001;

 app.use(cors("*"));
app.use(express.json()); // Middleware for parsing JSON requests

// Use the router for /register path
app.use('/register', router);

app.listen(port, () => {
    console.log(`Server is running   port ${port}`);
});
