//var  express = require('express');

var app =
 {
	  configure(function(){
	  set('port', process.env.PORT || 3000);
	  set('views', __dirname + '/views');
	  set('view engine', 'jade');
	  locals.pretty = true;
	  use(express.favicon());
	  use(express.logger('dev'));
	  use(express.bodyParser());
	  use(express.methodOverride());
	  use(app.router);
	  use(express.static(path.join(__dirname, 'public')));
	});
}

module.exports = app;


