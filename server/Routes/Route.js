const express = require('express');
const router = express.Router();
const connection = require('../db /connect'); // Corrected path

router.post('/', (req, res) => { // Note: Using '/' here
    const { name, email, password, number } = req.body;

    if (!name || !email || !password || !number) {
        return res.status(400).json("Every field is compulsory to fill");
    }
    
    try {
        connection.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
            // console.log("body params")
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            if (result.length > 0) {
                return res.status(422).json("User already registered");
            }

            const query = "INSERT INTO users (name, email, number, password) VALUES (?, ?, ?, ?)";
            const values = [name, email, number, password];

            connection.query(query, values, (err, result) => {
                if (err) {
                    console.log('error', err);
                    return res.status(500).json({ error: err.message });
                } else {
                    return res.status(200).json(req.body);
                }
            });

        });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;



