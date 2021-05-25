export class accountExample {
    constructor(public username: string, name: string, public group: string, public email: string) {

    }
}

export class ReimbursementClass {
    constructor( public reimbAmount:number,public reimbDescription:string, public reimbReceipt:string, public assignee: string, public username: string,public reimbFullyPaid: boolean = false , public reimbId?: number) { 

    }
}