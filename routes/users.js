'use strict';

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:name', function(req, res, next) {
  const resObj = { name: req.params.name };
  res.json(resObj);
})

module.exports = router;
