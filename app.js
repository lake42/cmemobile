
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

  var mysql = require('mysql');
  
var client = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'ronky',
    database: 'cme'
});

client.connect();

client.query(
  'SELECT * FROM churches', function(err, results, fields){
  //     console.log(results);
  //     console.log(fields);
    resl = results;
   }
);

client.end();

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// app.get('/', function(req,res){
//   res.render('index.jade', {
//     token: 'Test',
//     layout: true
//   });
// });

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
