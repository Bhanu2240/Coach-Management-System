/** @format */

const express = require("express");
const router = express.Router();
const { isadmin, AdminAuth } = require("../middleware/AdminAuth");
const { getAllUsers } = require("../Controller/auth");
const { createSuperAdmin } = require("../Controller/AuthUser");

router.get("/admin/users", AdminAuth, isadmin, getAllUsers);

router.post("/create-admin", createSuperAdmin);

module.exports = router;
