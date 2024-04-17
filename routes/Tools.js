var express = require('express');
var router = express.Router();
module.exports = router;
var express = require('express');
const Tools_controllers= require('../controllers/Tools');
var router = express.Router();
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 res.redirect("/login");
 }
router.get('/', Tools_controllers.Tools_view_all_Page);
router.get('/detail', Tools_controllers.Tools_view_one_Page);
router.get('/create',Tools_controllers.Tools_create_Page);
router.get('/update',secured,Tools_controllers.Tools_update_Page);
router.get('/delete',Tools_controllers.Tools_delete_Page);
module.exports = router;