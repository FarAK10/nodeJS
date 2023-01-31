import express from 'express';
import process from 'process';


import studentRoutes from './src/student/rotues'
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/',(req,res)=>{
    res.send('Hello postgress');
});

app.use('/api/v1/students',studentRoutes)

app.listen(PORT,()=>console.log('server started on prod'));