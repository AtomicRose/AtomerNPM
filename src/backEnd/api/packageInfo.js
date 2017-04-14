var express = require('express');
var router = express.Router();
var getPackageList = require('../controller/getPackageList/index');
var getPackageDetail = require('../controller/getPackageDetail/index');
var output = require('./output');

router.get('/packages', function (req, res, next) {
    var reqQuery = req.query;
    getPackageList().then((data) => {
        res.json(output.success(data));
    }, (err) => {
        res.json(output.error(1100001, err, {}));
    });
});

router.get('/packageDetail', function (req, res, next) {
    var reqQuery = req.query;
    getPackageDetail(reqQuery).then((data)=>{
        res.json(output.success(data));
    },(err)=>{
        res.json(output.error(1100001, err, {}));
    });
});


module.exports = router;
