
var express = require('express');
var router = express.Router();

router.get('/userInfo', function (req, res, next) {
    var reqQuery = req.query;
    res.json({
        status: 'ok',
        errorCode: '000000',
        errorMsg: 'success',
        results: {
            name: 'Jack',
            age: 14,
            desc: 'Hello. My name is Jack, from UK.'
        }
    });
});


module.exports = router;
