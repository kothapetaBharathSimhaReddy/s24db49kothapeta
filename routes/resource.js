var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Tools_controller = require('../controllers/Tools');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Tools ROUTES ///
// POST request for creating a Tools.
router.post('/Tools', Tools_controller.Tools_create_post);
// DELETE request to delete Tools.
router.delete('/Tools/:id', Tools_controller.Tools_delete);
// PUT request to update Tools.
router.put('/Tools/:id', Tools_controller.Tools_update_put);
// GET request for one Tools.
router.get('/Tools/:id', Tools_controller.Tools_detail);
// GET request for list of all Tools items.
router.get('/Tools', Tools_controller.Tools_list);
module.exports = router;
var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Tools_controller = require('../controllers/Tools');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// TOOLS ROUTES ///
// POST request for creating a Costume.
router.post('/Tools', Tools_controller.Tools_create_post);
// DELETE request to delete Costume.
router.delete('/Tools/:id', Tools_controller.Tools_delete);
// PUT request to update Costume.
router.put('/Tools/:id', Tools_controller.Tools_update_put);
// GET request for one Costume.
router.get('/Tools/:id', Tools_controller.Tools_detail);
// GET request for list of all Costume items.
router.get('/Tools', Tools_controller.Tools_list);
module.exports = router;
// API for our resource
// exports.api = function(req, res) {
// res.write('[');
// res.write('{"resource":"Tools", ');
// res.write(' "verbs":["GET","PUT", "DELETE"] ');
// res.write('}');
// res.write(']')
// res.send();
// };