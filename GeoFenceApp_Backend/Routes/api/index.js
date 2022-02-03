const express = require("express");
const {
  createNewUser,
  createNewCenter,
  addNewCoord,
} = require("../../Controllers");
const router = express.Router();

router.post("/api/newUser/:name", createNewUser);
router.post("/api/Newcenter/:name/:center", createNewCenter);
router.post("/api/addCoord/:name/:coord", addNewCoord);

module.exports = router;
