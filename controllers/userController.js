const User = require("../models/User")
const bcrypt = require("bcrypt")

exports.register = async (req, res) => {
    try {
        const { password } = req.body

        const hashPass = await bcrypt.hash(password, 10)
        const result = await User.create({
            ...req.body,
            password: hashPass
        }) 
        res.json({
            message: "user register success",
            result
        })
    } catch (error) {
        res.json({ message: "something went wrong", error })
    }
}

exports.fetchUsers = async (req, res) => {
    try {
        const result = await User.find()  // get
        res.json({
            message: "user fetch success",
            result
        })
    } catch (error) {
        res.json({ message: "something went wrong", error })
    }
}