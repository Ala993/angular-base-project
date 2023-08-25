export interface ILoginVm {
  username?: String;
  password?: String;
  rememberMe?: boolean;
}

export class LoginVm implements ILoginVm {
  constructor(
    public username?: String, 
    public password?: String, 
    public rememberMe?: boolean) {}
}
