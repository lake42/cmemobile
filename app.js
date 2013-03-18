
/**
 * tester
 * cherry pick
 * Module dependencies.
 */
var express   = require('express')
  , routes    = require('./routes')
  , user      = require('./routes/user')
  , models    = {}
  , http      = require('http')
  , mysql     = require('mysql')
  , path      = require('path');

var app = express();
var config = require('./modules/lib/config');

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.locals.pretty = true;
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});
 
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});
 
app.get('/churches', function(req,res){
  var client = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.db
  });
 
  client.query('SELECT * FROM churches WHERE episcopal_district <> "Tenth" LIMIT 0,25', 
    function(err, results, fields){
      res.render('churches', {
          results:results,
          fields:fields,
          title: config.appName,
          token: 'James Lakey'
      });
    }
  );
});
 
app.get('/', routes.index);
app.get('/users', user.list);
 
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});