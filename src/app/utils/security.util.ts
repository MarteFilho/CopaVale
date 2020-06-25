import { User } from '../models/user.model';



export class Security{


    public static set(user: User, token: string){
        const data = JSON.stringify(user);

        localStorage.setItem('copauser', data);
        localStorage.setItem('copatoken', token);

    }


    public static getUser(){
        const data = localStorage.getItem('copauser');
    if(data){
        return JSON.parse(data);
    }

    else
        return null;

    }

}