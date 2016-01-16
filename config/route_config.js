 /*
        This Module will be a series of require staments to set custom routes
        This is seperated from the express so that as our routes grow
        it will not make the config/express/js file grow become unmanagble
        and serves as one spot to add new routes insead 
        of burying through code
  */
 
 
 module.exports = function(app){
      
    //BRING IN THE ROUTES
	require('../app/routes/index.server.routes.js')(app);

      
 }