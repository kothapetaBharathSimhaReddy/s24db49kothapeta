var express = require('express');
const Tools_controllers= require('../controllers/Tools');
var router = express.Router();
/* GET Tools */
router.get('/', Tools_controllers.Tools_view_all_Page );
module.exports = router;

