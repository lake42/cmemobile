var config = (function(){
	{
    appName: "CME Database App",
    host:"127.0.0.1",
    user:"root",
    password: "ronky",
    db:"cme"
	}
module.exports = config;
}); 




// var config = (function( config, $){
//   var app = {};
//   app.appName = "CME Test Site";
//   app.env = {
//     production: false,
//     staging: false,
//     test: false,
//     development: false
//   }
//   app.server = {
//     port: 3000,
//     ip: '127.0.0.1' 
//   }
//   app.db = {
//     type: 'mysql',
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'ronky',
//     db: 'cme'
//   }
//   return config;

// })(config, jQuery);