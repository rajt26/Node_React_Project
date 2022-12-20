const User = require("../model/user");
const jwt = require("jsonwebtoken");
const Bcrypt = require("bcryptjs");
require('dotenv').config();

module.exports = {
    async create(req, res) {
        try {
            let params = req.body;
            const match = new RegExp("(0/91)?[7-9][0-9]{9}");
            if (
                params.password &&
                params.confirmPassword &&
                params.password != params.confirmPassword
            ) {
                return res
                    .status(401)
                    .json({
                        error: "password and confirm password should not be different!!",
                    });
            }
            params.password = Bcrypt.hashSync(params.password, 10);
            let userEmail = await User.findOne({ email: params.email });
            if (userEmail) {
                return res.status(401).json({ error: "user already exists!!!" });
            }
            let user = await User.create(params);
            return res.send(user);
        } catch (error) {
            throw error;
        }
    },

    async find(req, res) {
        try {
            let params = req.body;
            let user = await User.find({ id: params.id });
            return res.send(user);
        } catch (error) {
            return res.status(400).json({ error: "not found" });
        }
    },

    async delete(req, res) {
        try {
            let params = req.body;
            let user = await User.deleteOne({ id: params._id });
            return res.send(user);
        } catch (error) {
            return res.status(400).json({ error: "error" });
        }
    },

    async update(req, res) {
        try {
            let params = req.body;
            let user = await User.updateOne({ id: params._id }, params);
            return res.send(user);
        } catch (error) {
            return res.status(400).json({ error: "error" });
        }
    },
    async login(req, res) {
        try {
            let user = await User.findOne({ username: req.body.username });
            let checkPassword = await Bcrypt.compare(req.body.password, user.password)

            if (!user || !checkPassword) {
                return res.status(401).json({ error: "Please enter valid username or password" });
            }
            const token = jwt.sign(
                {
                    id: user.id,
                    name: user.name,
                },
                process.env.SECRET_TOKEN
            );
            res.header("Authorization", token).json({
                token, user,
            });
        } catch (error) {
            console.log('error-', error);
            return res.status(401).json({ error: "Please enter valid email or password" });
        }
    }
};