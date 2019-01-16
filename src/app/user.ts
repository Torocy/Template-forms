export class User {
    constructor(
        public name : string,
        public email : string,
        public phone : number,
        public topic : string,
        public timePreference: string,
        public subscribe: boolean
    ){}
}
/*create an instance of this model in app.component.ts*/