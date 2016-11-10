
var http = require('http');

var api = require('./routes/api');
var app = api();

var port = process.env.PORT || '3001';
app.set('port', port);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});
app.listen(3001);
// var server = http.createServer(app);
// server.listen(port);
