var express = require('express');

var app = express();

app.use(express.static(__dirname + '/_layouts'));
app.listen(process.env.PORT || 3000);
console.log("Server up on port 3000");

// Routing to push client to home page.
app.use(function(req, res) {
    res.sendFile(__dirname + '/_layouts/front.html');
});