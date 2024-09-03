// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
/* 
  This file is part of the Controller in the MVC framework. It is responsible for handling incoming HTTP requests 
  and responding with the appropriate data or view. Specifically, it defines routes for the application and 
  controls the flow of data between the Model and the View.
*/

const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
/* 
  This GET route handles requests to the root URL ('/'). 
  When a request is made to this endpoint, the server will process it and send a response back to the client.
*/

router.get('/', async (req, res) => {
  // TODO: Add a comment describing the purpose of the render method
  /* 
    The render method is used to render a view and send it as a response to the client. 
    In this case, it renders the 'all' view template, which will be displayed when the root URL is accessed.
  */
  res.render('all');
});

module.exports = router;
