/**
 * Created by kopinath on 07/11/16.
 */

var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

module.exports = function () {
    var app = express();
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    var router = express.Router();

    app.get('/', function (req, res, next) {
        console.log("Api is working");
        res.send(200);
    });

    require('../routes/api/testRoutes')(router);


    app.use(router);
    return app;

}
