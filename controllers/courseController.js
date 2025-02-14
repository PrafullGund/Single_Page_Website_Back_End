const courseService=require('../service/courseService');

const createCourseController=(req,res)=>{
    courseService.createCourseService(req.body,(error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message})
        }else{
            res.status(201).json({success:true,message:'Information Added Successfully',data:result})
        }
    })
}

const getAllCourseController=(req,res)=>{
    courseService.getCourseService((error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message})
        }else{
            res.status(200).json({success:true,data:result});
        }
    })
}

const getByIdCourseController = (req, res) => {
    const courseId = req.params.id;

    courseService.getByIdCourseService(courseId, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            if (result.length === 0) {
                res.status(404).json({ success: false, message: 'Course Not Found' });
            } else {
                res.status(200).json({ success: true, data: result[0] });
            }
        }
    });
}

const updateCourseController=(req,res)=>{
    const courseId=req.params.id;
    const courseData=req.body;
    courseService.updateCourseService(courseId,courseData,(error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message})
        }else{
            if(result.affectedRows>0){
                res.status(200).json({success:true,message:'Information Update Successfully'})
            }else{
                res.status(404).json({success:false,message:'information not found'});
            }
        }
    })
}

module.exports={
    createCourseController,
    getAllCourseController,
    getByIdCourseController,
    updateCourseController
}