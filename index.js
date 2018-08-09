const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require("https");
const request = require("request");
//Port number
const port = 8080;
// Cors origin
app.use(cors());
//Index route
app.get("/", (req, res) => {
    
    let jsonurl = 'https://s3.eu-west-2.amazonaws.com/interview-question-data/metoffice/Rainfall-England.json';
    var options = { method: 'GET', url: jsonurl };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.send(body);
    });
})

app.listen(port, () => {
    console.log('running on port' + port);
});
  