const express = require('express');
const bodyParser = require('bodyParser');
const cors = require('cors');
;

//express is the server
//bodyParser is the middle ware to handle form data
//cors is the package to make request across different ports

//port number that our server will run on
const PORT = 3000;
//specify an instance of express
const app = express();
app.use(bodyParser.json()) ;
app.use(cors());

app.get('/', function(req, res){
    res.send('Hello from server');

})
//listen to request
app.listen(PORT, function(){
    console.log("server running on localhost:" + PORT); 
})