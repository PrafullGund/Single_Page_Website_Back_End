const registrationService=require('../service/registrationService');

const createRegistrationController=(req,res)=>{
    registrationService.createRegistrationService(req.body,(error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message});
        }else{
            res.status(201).json({success:true, message:'Registration Added Successfully..!'})
        }
    })
}

const getAllRegistrationController=(req,res)=>{
    registrationService.getAllRegistrationService((error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message});
        }else{
            res.status(200).json({success:true,data:result})
        }
    })
}

module.exports={
    createRegistrationController,
    getAllRegistrationController
}