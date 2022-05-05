const app = require("express");
const router = app.Router();

const resource2Route = require("./resource2.route");
const resourceRoute = require("./resource1.route");

router.use("/resource1", resourceRoute);
router.use("/resource2", resource2Route);

module.exports = router;
