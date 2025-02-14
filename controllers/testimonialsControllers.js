const testimonialsService=require('../service/testimonialsService');

const createTestimonialsController = (req, res) => {
   
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'Image is required.' });
    }

    const testimonialsData = {
        name: req.body.name,
        company: req.body.company,
        message: req.body.message,
        imageUrl: `/uploads/${req.file.filename}`, 
        field:req.body.field
    };

    testimonialsService.createTestimonials(testimonialsData, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else {
            res.status(201).json({ success: true, message: 'Testimonials Information Successfully Created' });
        }
    });
};

const getAllTestimonialsController=(req,res)=>{
    testimonialsService.getAllTestimonials((error,result)=>{
        if(error){
            res.status(500).json({success:false,message:error.message});
        }else{
            res.status(200).json({success:true,data:result})
        }
    })
}

const updateTestimonialsController = (req, res) => {
    const { id } = req.params; 

    if (!id) {
        return res.status(400).json({ success: false, message: 'Testimonial ID is required.' });
    }

    const updatedData = {
        name: req.body.name,
        company: req.body.company,
        message: req.body.message,
        field:req.body.field
    };

   
    if (req.file) {
        updatedData.imageUrl = `/uploads/${req.file.filename}`;
    }

    testimonialsService.updateTestimonialsService(id, updatedData, (error, result) => {
        if (error) {
            res.status(500).json({ success: false, message: error.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ success: false, message: 'Testimonial not found.' });
        } else {
            res.status(200).json({ success: true, message: 'Testimonials Information Successfully Updated' });
        }
    });
};

module.exports={
    createTestimonialsController,
    getAllTestimonialsController,
    updateTestimonialsController
}