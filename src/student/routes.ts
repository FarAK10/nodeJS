import {Router} from 'express';
import {getStudents,getStudentByID,addStudent,removeStudent,updateUser} from './controller';

const router = Router();

router.get('/',getStudents);

router.get('/:id',getStudentByID);

router.delete('/:id',removeStudent);

router.put('/:id',updateUser);

router.post('/',addStudent);




export default router;