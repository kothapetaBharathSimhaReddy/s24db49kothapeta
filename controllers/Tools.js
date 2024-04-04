var Tools = require('../models/Tools');
// List of all Tools
exports.Tools_list = function(req, res) {
res.send('NOT IMPLEMENTED: Tools list');
};
// for a specific Tools.
exports.Tools_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Tools detail: ' + req.params.id);
};
// Handle Tools create on POST.
exports.Tools_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Tools create POST');
};
// Handle Tools delete from on DELETE.
exports.Tools_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Tools delete DELETE ' + req.params.id);
};
// Handle Tools update form on PUT.
exports.Tools_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Tools update PUT' + req.params.id);
};
// List of all Tools
exports.Tools_list = async function(req, res) {
    try{
    theTools = await Tools.find();
    res.send(theTools);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    //VIEWS
// Handle a show all view
exports.Tools_view_all_Page = async function(req, res) {
try{
theTools = await Tools.find();
res.render('Tools', { title: 'Tools Search Results', results: theTools });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// var express = require('express');
// const Tools_controllers= require('../controllers/Tools');
// var router = express.Router();
// /* GET Tools */
// router.get('/', Tools_controllers.Tools_view_all_Page );
// module.exports = router;
// Handle Tools create on POST.
exports.Tools_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Tools();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Tools_type":"goat", "cost":12, "size":"large"}
    document.usage = req.body.usage;
    document.name = req.body.name;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
