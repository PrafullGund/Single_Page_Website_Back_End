const path=require('path');
const express=require('express');
const dbConnection=require('./config/connection');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
app.use(cors());
app.use(bodyParser.json());

const courseRoute=require('./routes/courseRoute');
const testimonialsRoute=require('./routes/testimonialsRoute');
const ourTeamRoute=require('./routes/ourTeamRoute');
const registrationRoute=require('./routes/registrationRoute')

const port=process.env.PORT|3000;
app.use('/course',courseRoute);
app.use('/testimonials',testimonialsRoute);
app.use('/ourTeam',ourTeamRoute);
app.use('/registration',registrationRoute)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.listen(port,()=>{
    console.log(`Server Running on  http://localhost:${port}`);
})