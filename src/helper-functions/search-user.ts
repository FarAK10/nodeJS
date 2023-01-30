
import { users } from '../db/db';
export function searchUser(id:string){
 const user = users.find(user=>user.id===id);
 return user;
}