const express = require("express");
const validateUser = require("../middleware/user.validation");
const { createUser,getUsers,getByUserId, updateUser, deleteUser } = require("../controllers/user.controller");

const router = express.Router();


// GET all users
router.get("/",getUsers)


// GET one user
router.get("/:id", getByUserId);


// POST - create user
router.post("/", validateUser,createUser);


// PUT - update user
router.put("/:id", validateUser, updateUser);

// DELETE - delete user
router.delete("/:id",deleteUser);


// Export router
module.exports = router;