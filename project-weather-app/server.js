const cors = require('cors'); 
const express = require('express');


/** Listen Port */
const port = 3000;

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Start up an instance of app
const app = express();



/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server 'node server.js'
const server = app.listen(port, running)
function running(){
    console.log(`Server Running On URL: http://localhost:${port}`); 
};

// getiing data 
app.get('/all', getData);

function getData (request, response) {
  response.send(projectData);
};

// posting data
app.post('/add', addData);

function addData(request, response){
    projectData = request.body;
};

