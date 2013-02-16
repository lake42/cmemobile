var tempname = "jamesLakey";

exports.index = function(req, res){
  res.render('index', { title: 'Express', token: token });
};