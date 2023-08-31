const express = require("express");
const addUser = require("../controller/user-controller").addUser
const getUsers = require("../controller/user-controller").getUsers
const getu = require("../controller/user-controller").getUser
const edituser = require("../controller/user-controller").edituser
const deleteuser = require("../controller/user-controller").deleteuser
const router = express.Router();


router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:id', getu);
router.put('/:id', edituser);
router.delete('/:id', deleteuser);
module.exports = router;