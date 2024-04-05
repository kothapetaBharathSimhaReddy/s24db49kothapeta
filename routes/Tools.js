var express = require('express');
const Tools_controllers= require('../controllers/Tools');
var router = express.Router();
/* GET Tools */
router.get('/', Tools_controllers.Tools_view_all_Page );

// GET request for one Tools.
router.get('/Tools/:id', Tools_controllers.Tools_detail);

module.exports = router;