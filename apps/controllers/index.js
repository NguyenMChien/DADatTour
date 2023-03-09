var express = require("express");
var router = express.Router();
router.use("/home", require(__dirname + "/homecontroller"));
router.use("/product", require(__dirname + "/productcontroller"));
router.use("/services", require(__dirname + "/servicescontroller"));
router.use("/about", require(__dirname + "/aboutcontroller"));
router.use("/contact", require(__dirname + "/contactcontroller"));

router.get("/", function(req,res){
    res.render("index");
   
    // res.json({"message": "this is index page"});
    
});
module.exports = router;
