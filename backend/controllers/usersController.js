const bcrypt = require('bcrypt');
const User = require('../models/userModel');

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email is already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        console.log(`User created: ${user}`);
        // res.json({ message: "Register the user" });
        res.send(user)
    } catch (error) {
        console.error(`Error creating user: ${error.message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && bcrypt.compareSync(password, user.password)) {
            res.json({ message: "Login successful" });
        } else {
            res.status(401).json({ error: "Invalid credentials" });
        }
    } catch (error) {
        console.error(`Error during login: ${error.message}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { registerUser, loginUser };
