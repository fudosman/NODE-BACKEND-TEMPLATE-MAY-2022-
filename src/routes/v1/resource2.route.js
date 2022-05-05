const express = require("express");
const router = express.Router();
const {getResource,postResource,putResource,deleteResource} = require("../../controllers/resource2.controller");

router.get("/", getResource);
router.post("/", postResource);
router.put("/", putResource);
router.delete("/", deleteResource);

module.exports = router;