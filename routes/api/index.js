const router = require("express").Router();
const entryRoutes = require("./entries");

// Entry routes
router.use("/entries", entryRoutes);

module.exports = router;