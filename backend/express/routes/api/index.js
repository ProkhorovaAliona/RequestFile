var express = require('express');
var router = express.Router();

router.get('/getTest', function(req, res, next) {
    res.json({
        'status': 'OK'
    })
});

module.exports = router;
