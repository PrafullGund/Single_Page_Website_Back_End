const express=require('express');
const router=express.Router();
const ourTeamController=require('../controllers/ourTeamController');
const upload = require('../utils/multerConfig');

router.post('/', upload.single('image'), ourTeamController.createOurTeamController);
router.get('/',ourTeamController.getAllOurTeamController);
router.get('/:id',ourTeamController.getByIdOurTeamController);
router.put('/:id', upload.single('image'), ourTeamController.updateOurTeamController);

module.exports=router;