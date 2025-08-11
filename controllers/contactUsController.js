const contactUsService=require('../service/contactUsService');

const createContactUsController=(req,res)=>{
       const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const contactData = { name, email, message };

    contactUsService.createContactUsService(contactData, (error, result) => {
        if (error) {
            return res.status(500).json({ success: false, message: error.message });
        }
        res.status(201).json({ success: true, message: 'Message submitted successfully' });
    });
}

module.exports={
    createContactUsController
}