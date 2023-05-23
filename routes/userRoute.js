const { fetchUsers, register } = require("../controllers/userController")

const router = require("express").Router()

router
  .get("/", fetchUsers)
  .post("/register", register)

  module.exports = router