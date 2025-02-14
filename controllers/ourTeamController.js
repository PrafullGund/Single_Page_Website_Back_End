const ourTeamService=require('../service/ourTeamService');

const createOurTeamController = (req, res) => {
    // console.log(req.body); 
    // console.log(req.file); 
  
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Image is required' });
    }
  
    const ourTeamData = {
      name: req.body.name,
      qalification: req.body.qalification,
      experience: req.body.experience,
      imageUrl: `/uploads/${req.file.filename}`,
    };
  
    ourTeamService.createOurTeamService(ourTeamData, (error, result) => {
      if (error) {
        res.status(500).json({ success: false, message: error.message });
      } else {
        res.status(201).json({ success: true, message: 'Team Added Successfully' });
      }
    });
  };

const getAllOurTeamController=(req,res)=>{
    ourTeamService.getAllOurTeamService((error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message});
        }else{
            res.status(200).json({success:true,data:result})
        }
    })
}

const getByIdOurTeamController=(req,res)=>{
    const ourTeamId=req.params.id;

    ourTeamService.getByIdOurTeamService(ourTeamId,(error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message})
        }else{
            if(result.length===0){
                res.status(400).json({success:false,message:'Our Team Not Found'})
            }
            else{
                res.status(200).json({success:true,data:result[0]})
            }
        }
    })
}

const updateOurTeamController=(req,res)=>{
    const {id}=req.params;

    if(!id){
        return res.status(400).json({success:false,message:'Our Team Id is required.'});
    }

    const updateOurTeamData={
        name: req.body.name,
        qalification: req.body.qalification,
        experience: req.body.experience,
        imageUrl: `/uploads/${req.file.filename}`,
    };

    if(req.file){
        updateOurTeamData.imageUrl=`/uploads/${req.file.filename}`;
    }

    ourTeamService.updateOurTeamService(id,updateOurTeamData,(error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message});
        }else if(result.affectedRows===0){
            res.status(404).json({success:false,message:'Our Team Not Found'});
        }else{
            res.status(200).json({success:true,message:'Our Team Data Successfully Updated'});
        }
    })
}

module.exports={
    createOurTeamController,
    getAllOurTeamController,
    getByIdOurTeamController,
    updateOurTeamController
}