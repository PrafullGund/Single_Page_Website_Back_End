const dbConnection=require('../config/connection');

const createContactUsService=(contactUsData,callback)=>{
    const query='INSERT INTO contactUs (name,email,message) VALUES (?,?,?)';
    dbConnection.query(query,
        [
            contactUsData.name,
            contactUsData.email,
            contactUsData.message
        ],
        (error,result)=>{
            callback(error,result)
        })
}

module.exports={
    createContactUsService
}