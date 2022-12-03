var express = require('express');
var router = express.Router();

router.get("/:nick", function(req, res, next) {
    res.send(req.params.nick);
});


module.exports = router;
