import { pool } from '../db';
import  {Request,Response} from 'express';
import { getStudents as getStudentsQuery,getStudentsBYID as getStudentBYIDquery ,checkEmailExist,addStudentQuery,deleteUserQuery,updateUserQuery} from './queries';

export const getStudents= (req:Request,res:Response)=>{
    pool.query(getStudentsQuery,(err,results)=>{
        if(err) throw err;
        res.status(200).json(results.rows);
    });
};

export const getStudentByID = (req:Request,res:Response)=>{
    const id = parseInt(req.params.id);
    pool.query(getStudentBYIDquery,[id],(err,result)=>{
        if(err) throw err;
        res.status(200).json(result.rows);
    });
};

export const addStudent = (req:Request,res:Response)=>{
    const {name,email,age,dob} = req.body;
    console.log(req.body);
    pool.query(checkEmailExist,[email],(err,result)=>{
        if(result.rows.length) {
            res.send('email already exists');
            return;
        } else {
            pool.query(addStudentQuery,[name,email,age,dob],(err,result)=>{
                if(err) throw err;
                res.status(201).send('student created successfulty');
            });
        }
    });
};

export const removeStudent = (req:Request,res:Response)=>{
    const id = parseInt(req.params.id);
    pool.query(getStudentBYIDquery,[id],(err,result)=>{
        if(err) throw err;
        const noStudentFound = !result.rows.length;
        if(noStudentFound) {
            res.send('Student does not exist in db, could not delete');
        } else {
            pool.query(deleteUserQuery,[id],(err)=>{
                if(err) throw err;
                res.status(201).send('Student removed successfully');
            });
        }
    });

};

export const updateUser = (req:Request,res:Response)=>{
    const id = parseInt(req.params.id);
    const {name} = req.body;

    pool.query(getStudentBYIDquery,[id],(err,result)=>{
        if(err) throw err;
        const noStudentFound = !result.rows.length;
        if(noStudentFound){
            res.send('Student does not exist in db, could not update');
        } else {
            pool.query(updateUserQuery,[name,id],(err,result)=>{
                if(err) throw err;
                res.status(200).send('Student updated successfully');
            });
        }
    });
};