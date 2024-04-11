var express = require('express');
const Tools_controllers= require('../controllers/Tools');
var router = express.Router();
/* GET Tools */
router.get('/', Tools_controllers.Tools_view_all_Page );

// GET request for one Tools.
router.get('/Tools/:id', Tools_controllers.Tools_detail);
/* GET detail Tools page */
router.get('/detail', Tools_controllers.Tools_view_one_Page);

/* GET create Tools page */
router.get('/create', Tools_controllers.Tools_create_Page);

module.exports = router;