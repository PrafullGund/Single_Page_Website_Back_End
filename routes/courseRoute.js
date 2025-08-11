const express=require('express');
const router=express.Router();
const upload = require('../utils/multerConfig'); 
const courseController=require('../controllers/courseController');

router.post('/',upload.single('imageUrl'),courseController.createCourseController);
router.get('/',courseController.getAllCourseController);
router.get('/:id',courseController.getByIdCourseController);
router.put('/:id',upload.single ('imageUrl'),courseController.updateCourseController);

module.exports=router