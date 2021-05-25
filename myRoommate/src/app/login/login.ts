
export class login{
    [x: string]: any;
    constructor(public username:String,public password:string){
    }


}

export interface Alert {
    type: string;
    message: string;
  }