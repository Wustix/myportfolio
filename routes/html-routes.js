// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // app.get("/resume", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/resume.html"));
  // });



};