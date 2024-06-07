// Importing the Express module
const express = require('express');

// Creating a router instance
const router = express.Router();

// Defining a route handler for the root path '/'
router.get('/', function(req, res) {
    // Sending the 'index.html' file as a response
    res.sendFile(__dirname + "/index1.html");
});
router.get('/twitter', function(req, res) {
    // Sending the 'index.html' file as a response
    res.redirect("https://www.youtube.com/watch?v=qt_abdPXoU4");
});
router.get('/blog', function(req, res) {
    // Sending the 'index.html' file as a response
    res.redirect("https://www.blogger.com/about/?bpli=1");
});
router.get('/facebook', function(req, res) {
    // Sending the 'index.html' file as a response
    res.redirect("https://www.youtube.com/watch?v=I92FyknWFJg");
});
router.get('/youtube', function(req, res) {
    // Sending the 'index.html' file as a response
    res.redirect("https://www.youtube.com/watch?v=qt_abdPXoU4");
});
router.get('/instagram', function(req, res) {
    // Sending the 'index.html' file as a response
    res.redirect("https://www.youtube.com/watch?v=qt_abdPXoU4");
});
router.get('/whatsapp', function(req, res) {
    // Sending the 'index.html' file as a response
    res.redirect("https://www.youtube.com/watch?v=qt_abdPXoU4");
});
router.get('/Form', function(req, res) {
    // Sending the 'Validation form.html' file as a response
   // res.sendFile(path.join(__dirname, 'router', '/Validation form.html'));
    res.redirect("https://www.youtube.com/watch?v=qt_abdPXoU4");
});

// Exporting the router instance to be used in other parts of the application
module.exports = router;