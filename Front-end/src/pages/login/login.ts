let password: string;
let login: string;
export default function sendRequestFromBack(
  this: any,
  Login: string,
  Password: string,
) {
  if (Login || Password) {
    this.password = Password;
    this.login = Login;
  }
}
