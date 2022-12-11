const express = require('express');
const compression = require('compression');
const methodOverride = require('method-override');
var cors = require('cors');

module.exports = function () {
    const app = express();

    app.use(compression());

    app.use(express.json());

    app.use(express.urlencoded({extended: true}));

    app.use(methodOverride());

    app.use(cors());

    /* App (Android, iOS) */
    require('../src/app/User/userRoute')(app);
    require('../src/app/Test/testRoute')(app);
    require('../src/app/Record/recordRoute')(app);

    return app;
};