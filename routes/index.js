
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'ExpressY', token: 'James Lakey' });
};