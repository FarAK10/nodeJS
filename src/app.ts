
import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from './routes/users';

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.json());

app.use('/users',usersRouter);

const PORT =  5000;

app.listen(PORT);
