const dbConnection = require('../config/connection');

const createRegistrationService = (registrationData, callback) => {
    const query = 'INSERT INTO registration (studentName, emailId, mobileNumber, education,courseId) VALUES (?, ?, ?, ?,?)';

    dbConnection.query(query, 
        [
            registrationData.studentName,
            registrationData.emailId,
            registrationData.mobileNumber,
            registrationData.education,
            registrationData.courseId
        ], 
        (error, result) => {
            callback(error, result);
        });
};

const getAllRegistrationService=(callback)=>{
    const query='SELECT * FROM registration';
    dbConnection.query(query,(error,result)=>{
        callback(error,result)
    })
}

module.exports = {
    createRegistrationService,
    getAllRegistrationService
};
