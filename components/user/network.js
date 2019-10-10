const express    = require('express');
const response   = require('../../network/response');
const controller = require('./controller');
const router     = express.Router();

router.get('/', function(req, res) {
  controller.getUsers()
  .then((users) => {
    response.success(req, res, users, 201);
  })
  .catch(e => {
    response.error(req, res, 'Internal Error', 500, e);
  });
});

router.post('/', function(req, res) {
  controller.addUser(req.body.name)
  .then((fullMessage) => {
    response.success(req, res, fullMessage, 201);
  })
  .catch(e => {
    response.error(req, res, 'Internal Error', 500, e);
  });
});

module.exports = router;