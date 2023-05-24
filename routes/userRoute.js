const { fetchUsers, register, login, destroy } = require("../controllers/userController")

const router = require("express").Router()

router
  .get("/", fetchUsers)
  .post("/register", register)
  .post("/login", login)
  .delete("/destroy", destroy)

  module.exports = router