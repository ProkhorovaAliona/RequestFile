const express = require('express');
const router = express.Router();
const jsonData = require('./test.json');

router.get('/getTest', function(req, res, next) {
    res.json(jsonData);
});

console.log(jsonData.file);
module.exports = router;
