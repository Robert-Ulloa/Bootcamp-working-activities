// TODO: Import express and call the Router method
const apiRoutes = require("express").Router();

// TODO: Import modules for tips/feedback
const feedbackRoutes = require("./feedback");
consr tipsRoutes = require("./tips");
// TODO: Use our routes
apiRoutes.use("/feedback", feedbackRoutes);

// TODO: Export app
