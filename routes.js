var express = require("express");
var router = express.Router();
var members = require("./db").members

router.route('/members')
  .get(members.getAllMembers)
  .post(members.createMember)

module.exports = router;