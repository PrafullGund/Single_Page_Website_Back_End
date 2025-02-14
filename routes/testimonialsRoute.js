const express=require('express');
const router=express.Router();
const testimonialsController = require('../controllers/testimonialsControllers');
const upload = require('../utils/multerConfig');

router.post('/', upload.single('image'), testimonialsController.createTestimonialsController);
router.get('/',testimonialsController.getAllTestimonialsController);
router.put('/:id', upload.single('image'), testimonialsController.updateTestimonialsController);

module.exports=router;