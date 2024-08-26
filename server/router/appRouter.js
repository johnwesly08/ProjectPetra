const express = require('express');
const { activeServer, sendEmail } = require('../controller/appController');
const routers = express.Router();

routers.get("/active", activeServer); // this route for render
routers.post("/send-email", sendEmail);

module.exports = ("appRouters", routers);