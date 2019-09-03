var express = require("express");
var app = express();
app.listen(9090, function(req, res) {
    console.log("9090 started");

});
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/home", function(req, res) {
    res.sendFile(__dirname + "/home.html");
});

var router = express.Router();
app.use("/guest", router);
router.get("/about", function(req, res) {
    res.sendFile(__dirname + "/about.html");
});
router.get("/contact", function(req, res) {
    res.sendFile(__dirname + "/contact.html");
});


var router1 = express.Router();
app.use("/user", router1);

router1.get("/", function(req, res) {
    res.sendFile(__dirname + "/userlogin.html");
});

var routeruserlogin = express.Router();
app.use("/userlogin", routeruserlogin);

routeruserlogin.post("/", function(req, res) {
    if (req.body.t1 == "user" && req.body.t2 == "user")
        res.sendFile(__dirname + "/userdata.html");
    else
        res.send("invalid login");

});

var router2 = express.Router();
app.use("/admin", router2);

router2.get("/", function(req, res) {
    res.sendFile(__dirname + "/adminlogin.html");
});


var routeradminlogin = express.Router();
app.use("/adminlogin", routeradminlogin);

routeradminlogin.post("/", function(req, res) {
    if (req.body.t3 == "admin" && req.body.t4 == "admin")
        res.sendFile(__dirname + "/admindata.html");
    else
        res.send("invalid login");

});


app.use(function(req, res) {
    res.write("No page Here");
    res.end();
});