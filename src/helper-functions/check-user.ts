import { IUser,IUserCredentials } from '../interfaces/user';

export function checkUser(user:IUser,credentials:IUserCredentials):boolean{
    if(user.login===credentials.login && user.password===credentials.password) return true;
    return false;
}