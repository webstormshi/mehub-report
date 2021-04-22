var express = require('express')
var path = require('path')
const serveIndex = require('serve-index');

var app = express();

app.use('/', serveIndex(path.join(__dirname, 'static'), { 'icons': true }));
app.use(express.static(path.join(__dirname, 'static')))

var server = app.listen(3000, function () {
    console.log('listening on port 3000')
})