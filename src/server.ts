import express from 'express';
import process from 'process';

import studentRoutes from './student/routes';

const PORT = process.env.PORT || 2000 ;

const app = express();

app.use(express.json());



app.use('/api/v1/students',studentRoutes);

app.get('/',(req,res)=>{

    res.send('Hello postgress');
});

app.listen(PORT,()=>console.log('server started on prod'));