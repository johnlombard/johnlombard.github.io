// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public/css/img/'))

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "views/index.html"));
  });
  
  app.get("/portfolio", function(req, res) {
    res.sendFile(path.join(__dirname, "views/portfolio.html"));
  });
  
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "views/about.html"));
  });
  

  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  