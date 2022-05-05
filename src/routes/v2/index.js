const app = require("express");
const router = app.Router();

const resource2Route = require("./resource2");
const resourceRoute = require("./resource");

router.use("/resource1", resourceRoute);
router.use("/resource2", resource2Route);

module.exports = router;


