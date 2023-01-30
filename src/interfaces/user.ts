export interface IUser {
  id: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
}


export interface IUserBody {
  login:string;
  password:string;
  age:number;
}

export interface IUserCredentials {
  login:string;
  password:string;
}