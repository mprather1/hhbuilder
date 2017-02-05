var db = require("../init");

function createMember(req, res, next){
  db.none('insert into members(age, relationship, smoker)' + 'values(${age}, ${relationship}, ${smoker})', req.body)
  .then(function(){
    res.status(200)
    .json({
      status: 'success',
      message: 'inserted one Household'
    });
  })
  .catch(function(err){
    return next(err);
  });
}

function getAllMembers(req, res, next){
  db.any('select * from members')
  .then(function(data){
    res.status(200)
    .json(data);
  })
  .catch(function(err){
    return next(err);
  });
}

module.exports = {
  createMember: createMember, 
  getAllMembers: getAllMembers
};