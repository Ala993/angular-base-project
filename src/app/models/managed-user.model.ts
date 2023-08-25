
export interface IManagedUserVM {
    id?: String;
    login?: String;
    firstName?: String;
    lastName?: String;
    email?: String;
    imageUrl?: String;
    langKey?: String;
    password?: String;
    phoneNumber1?: number,
    phoneNumber2?: number,
    address?: String,
    userType?: String
  }
  
  export class ManagedUserVM implements IManagedUserVM {
    constructor(
        public id?: String,
        public login?: String,
        public firstName?: String,
        public lastName?: String,
        public email?: String,
        public imageUrl?: String,
        public langKey?: String,
        public password?: String,
        public phoneNumber1?: number,
        public phoneNumber2?: number,
        public address?: String,
        public userType?: String
        ) {}
  }
  