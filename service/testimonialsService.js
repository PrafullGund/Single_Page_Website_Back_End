const dbConnection=require('../config/connection');

const createTestimonials=(testimonialsData,callback)=>{
    const query='INSERT INTO testimonials(name,company,message,imageUrl,field) VALUES (?,?,?,?,?)';
    dbConnection.query(query,
        [
            testimonialsData.name,
            testimonialsData.company,
            testimonialsData.message,
            testimonialsData.imageUrl,
            testimonialsData.field
        ],
        (error,result)=>{
            callback(error,result)
        })
}

const getAllTestimonials=(callback)=>{
    const query='SELECT * FROM testimonials';
    dbConnection.query(query,
        (error,result)=>{
            callback(error,result);
        })
}

const updateTestimonialsService=(testimonialsId,testimonialsData,callback)=>{
    const query=`UPDATE testimonials SET name=?,company=?,message=?,imageUrl=?,field=? WHERE id=?`;
    dbConnection.query(query,
        [
            testimonialsData.name,
            testimonialsData.company,
            testimonialsData.message,
            testimonialsData.imageUrl,
            testimonialsData.field,
            testimonialsId
        ],
        (error,result)=>{
            callback(error,result);
        })
}

module.exports={
    createTestimonials,
    getAllTestimonials,
    updateTestimonialsService
}