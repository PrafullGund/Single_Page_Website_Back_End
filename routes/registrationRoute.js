const express=require('express');
const router=express.Router();
const registrationController=require('../controllers/registrationController');

router.post('/',registrationController.createRegistrationController);
router.get('/',registrationController.getAllRegistrationController)

module.exports=router;