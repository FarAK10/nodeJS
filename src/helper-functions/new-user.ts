import { IUserBody,IUser } from '../interfaces/user';
import { v4 as uuidv4 } from 'uuid';

export {IUser} from '../interfaces/user';

export function createNewUser(body:IUserBody):IUser{
    const id = uuidv4();

    return {
        ...body,
        id:id,
        isDeleted:false
        
    };
}