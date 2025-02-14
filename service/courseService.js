const dbConnection=require('../config/connection');

const createCourseService=(courseData,callback)=>{
    const query=`INSERT INTO course (courseName,description,courseDuration,fees,nextBatchStaringDate,modeOfBatch,batchTime) VALUES (?,?,?,?,?,?,?)`;
    dbConnection.query(query,
        [
            courseData.courseName,
            courseData.description,
            courseData.courseDuration,
            courseData.fees,
            courseData.nextBatchStaringDate,
            courseData.modeOfBatch,
            courseData.batchTime
        ],
        (error,result)=>{
            callback(error,result);
        })
}

const getCourseService=(callback)=>{
    const query='SELECT * FROM course';
    dbConnection.query(query,(error,result)=>{
        callback(error,result);
    })
}

const getByIdCourseService = (courseId, callback) => {
    const query = 'SELECT * FROM course WHERE id = ?';
    dbConnection.query(query, [courseId], (error, result) => {
        callback(error, result);
    });
}

const updateCourseService=(courseId,courseData,callback)=>{
    const query='UPDATE course SET courseName=?,description=?,courseDuration=?,fees=?,nextBatchStaringDate=?,modeOfBatch=?,batchTime=? WHERE id=?';
    dbConnection.query(query,
        [
            courseData.courseName,
            courseData.description,
            courseData.courseDuration,
            courseData.fees,
            courseData.nextBatchStaringDate,
            courseData.modeOfBatch,
            courseData.batchTime,
            courseId
        ],
        (error,result)=>{
            callback(error,result);
        })
}

module.exports={
    createCourseService,
    getCourseService,
    getByIdCourseService,
    updateCourseService
}