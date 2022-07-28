// James Morimoto
// TCSS460


// importing express
var express = require("express");
var app = express();

// basic intro
app.get('/', function(req, res) {
    // setting status to successful
    res.status(200);
    // sends a message to the screen
    res.send("<h1>This rest will perform various physics calculations for you</h1>")
    // debugging tool
    console.log("A request has been processed in / (root) ")
});

// first service: that takes in three variables and calculates the displacement
app.get('/displacement/:u/:t/:a', function(req, res) {
    // setting up all the variables
    const u = parseInt(req.params.u);
    const t = parseInt(req.params.t);
    const a = parseInt(req.params.a);
    const two = 2;
    console.log("displacement request sent");

    //performing the calculation
    const result = (u * t) + (a * Math.pow(t, 2))/2;

    //sending the result back
    res.json({"result": result});
});

// second service: takes in three variables and calculates the velocity
app.get('/velocity/:u/:a/:s', function(req, res) {
    // setting up the variables
    const u = parseInt(req.params.u);
    const a = parseInt(req.params.a);
    const s = parseInt(req.params.s);
    const two = 2;

    console.log("velocity request sent")

    // performing the calculation
    const result = Math.sqrt(Math.pow(u, two) + two * a * s);

    // sending result
    res.json({"result": result});
});

// third service: takes in two variables and calculates the kinetic energy
app.get('/kinetic-energy/:m/:v', function(req, res) {
    // setting up the variables
    const m = parseInt(req.params.m);
    const v = parseInt(req.params.v);

    console.log("Kinetic energy request sent");

    //perfomring the calculation
    const result = (m * Math.pow(v, 2))/2;
    // sending the result
    res.json({"result": result});
});

// fourth service: takes in two variables and calculates the gravitational potential
app.get('/gravitational-potential/:m/:h', function(req, res) {
    // setting up variables
    const m = parseInt(req.params.m);
    const h = parseInt(req.params.h);
    const g = 9.80665;
    
    console.log("Potential energy request sent");

    // performing calculation
    const result = m * g * h;
    //sending result
    res.json({"result": result});
});

// listens for port 3000
app.listen(3000, function() {
    console.log("port 3000");
});