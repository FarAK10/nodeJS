import express from 'express';
import { users } from '../db/db';
import { searchUser } from '../helper-functions/search-user';
import {createNewUser} from '../helper-functions/new-user';
import {checkUser} from '../helper-functions/check-user';
import {authSchema,userSchema} from '../schemas/validation-schema';
import { IUserBody } from '../interfaces/user';


const router = express.Router();



router.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = searchUser(id);
  if (user == undefined) {
    res.status(404).send('user not found');
  } else {
    res.status(200).json(user);
  }
});

router.delete('/:id', async (req, res) => {
  const body = req.body;
   try{
    const result =await authSchema.validateAsync(body);
    const id = req.params.id;
    const user = searchUser(id);

    if (user == undefined) {
      res.status(404).send('user not found');
    } else {
      const isPermitted = checkUser(user,body);
      if(isPermitted){
        user.isDeleted = true;
        res.status(202).send('successfully deleted');
      } else {
        throw new Error('incorrect password or email');
      }
    }
  } catch(err){
     res.status(422).json({
      message: 'Invalid request', 
      data: body 
     });

  }
  
});

router.get('/', (req, res) => {
  res.json(users);
});

router.post('/', async (req, res) => {
  const body = req.body as IUserBody;
 try {
  const result = await userSchema.validateAsync(body);
  const user = createNewUser(body);
  users.push(user);
  res.status(200).json({ body });
 } catch(err){
   throw new Error('invalid body format(follow required schema)');
 }
  
});


export default router;
