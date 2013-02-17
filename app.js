
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var mysql = require('mysql');

var app = express();

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
  app.use(express.errorHandler());
});

app.get('/churches', function(req,res){
var client = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'ronky',
    database: 'cme'
});

client.query('SELECT * FROM churches WHERE episcopal_district <> "Tenth"', 
  function(err, results, fields){
      res.render('churches', {
          results:results,
          fields:fields,
          title: 'ExpressW', 
          token: 'James Lakey'
      });

   }
);

});

// app.get('/', function(req,res){
//   res.render('index', {
//         title: 'the index page',
//         token: 'Schmidlap Moimes'
//   });
// });

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

function dumpObject(obj, maxDepth) {  
    var dump = function(obj, name, depth, tab){  
        if (depth > maxDepth) {  
            return name + ' - Max depth\n';  
        }  
          
        if (typeof(obj) == 'object') {  
            var child = null;  
            var output = tab + name + '\n';  
            tab += '\t';  
            for(var item in obj){  
                child = obj[item];  
                if (typeof(child) == 'object') {  
                    output += dump(child, item, depth + 1, tab);  
                } else {  
                    output += tab + item + ': ' + child + '\n';  
                }  
            }  
        }  
        return output;  
    }  
      
    return dump(obj, '', 0, '');  
}  
