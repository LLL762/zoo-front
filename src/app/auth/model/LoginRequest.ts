import Msg from 'src/app/messages/ValidationMsg';

export class LoginRequest {
  static readonly properties = {
    username: {
      required: { msg: Msg.required('username') },
      minlength: { value: 5, msg: Msg.minLength('username', 5) },
      maxlength: { value: 50, msg: Msg.maxLength('username', 50) },
    },
    password: {
      required: { msg: Msg.required('password') },
      minlength: { value: 8, msg: Msg.minLength('password', 8) },
      maxlength: { value: 255, msg: Msg.maxLength('password', 255) },
    },
  } as const;

  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
