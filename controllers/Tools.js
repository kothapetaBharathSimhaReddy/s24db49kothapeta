var Tools = require('../models/Tools');
// List of all Tools
exports.Tools_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Tools list');
};
// for a specific Tools.
exports.Tools_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Tools detail: ' + req.params.id);
};
// Handle Tools create on POST.
exports.Tools_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Tools create POST');
};
// Handle Tools delete from on DELETE.
exports.Tools_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Tools delete DELETE ' + req.params.id);
};
// Handle Tools update form on PUT.
exports.Tools_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Tools update PUT' + req.params.id);
};
// List of all Tools
exports.Tools_list = async function (req, res) {
    try {
        theTools = await Tools.find();
        res.send(theTools);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
//VIEWS
// Handle a show all view
exports.Tools_view_all_Page = async function (req, res) {
    try {
        theTools = await Tools.find();
        res.render('Tools', { title: 'Tools Search Results', results: theTools });
    }
    catch (err) {
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
exports.Tools_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Tools();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Tools_type":"goat", "cost":12, "size":"large"}
    document.usage = req.body.usage;
    document.name = req.body.name;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Tools.
exports.Tools_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Tools.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

exports.Tools_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
       ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Tools.findById(req.params.id)
        // Do updates of properties
        if (req.body.usage)
            toUpdate.usage = req.body.usage;
        if (req.body.name) toUpdate.name = req.body.name;
        if (req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
       failed`);
    }
};
// Handle Costume delete on DELETE.
exports.Tools_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Tools.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.Tools_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Tools.findById( req.query.id)
    res.render('Toolsdetail',
    { title: 'Tools Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Tools_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Toolscreate', { title: 'Tools Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
