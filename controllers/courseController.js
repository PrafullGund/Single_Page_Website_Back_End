const courseService=require('../service/courseService');

// const createCourseController=(req,res)=>{
//     courseService.createCourseService(req.body,(error,result)=>{
//         if(error){
//             res.status(500).json({success:false,message:error.message})
//         }else{
//             res.status(201).json({success:true,message:'Information Added Successfully',data:result})
//         }
//     })
// }

const createCourseController = (req, res) => {
    const {
        courseName,
        description,
        courseDuration,
        fees,
        nextBatchStaringDate,
        modeOfBatch,
        batchTime
    } = req.body;

    const imageUrl = req.file ? req.file.filename : null; // ✅ Extract image filename

    if (!imageUrl) {
        return res.status(400).json({ success: false, message: 'Image file is required' });
    }

    const courseData = {
        courseName,
        description,
        courseDuration,
        fees,
        nextBatchStaringDate,
        modeOfBatch,
        batchTime,
        imageUrl
    };

    courseService.createCourseService(courseData, (error, result) => {
        if (error) {
            return res.status(500).json({ success: false, message: error.message });
        } else {
            return res.status(201).json({
                success: true,
                message: 'Information Added Successfully',
                data: result
            });
        }
    });
};

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

const updateCourseController = (req, res) => {
  const courseId = req.params.id;

  const {
    courseName,
    description,
    courseDuration,
    fees,
    nextBatchStaringDate,
    modeOfBatch,
    batchTime
  } = req.body;

  const imageUrl = req.file ? req.file.filename : null;

  if (!courseName || !description || !courseDuration || !fees || !nextBatchStaringDate || !modeOfBatch || !batchTime || !imageUrl) {
    return res.status(400).json({ success: false, message: "All fields including imageUrl are required" });
  }

  const courseData = {
    courseName,
    description,
    courseDuration,
    fees,
    nextBatchStaringDate,
    modeOfBatch,
    batchTime,
    imageUrl
  };

  courseService.updateCourseService(courseId, courseData, (error, result) => {
    if (error) {
      res.status(500).json({ success: false, message: error.message });
    } else if (result.affectedRows > 0) {
      res.status(200).json({ success: true, message: 'Course updated successfully' });
    } else {
      res.status(404).json({ success: false, message: 'Course not found' });
    }
  });
};


module.exports={
    createCourseController,
    getAllCourseController,
    getByIdCourseController,
    updateCourseController
}