const express=require('express');
const router=express.Router();
const courseController=require('../controllers/courseController');

router.post('/',courseController.createCourseController);
router.get('/',courseController.getAllCourseController);
router.get('/:id',courseController.getByIdCourseController);
router.put('/:id',courseController.updateCourseController);

module.exports=router