import Msg from 'src/app/messages/ValidationMsg';

export class LoginRequest {
  static readonly properties = {
    username: {
      required: [true, Msg.required('username')],
      minlength: [5, Msg.minLength('username', 5)],
      maxlength: [50, Msg.maxLength('username', 50)],
    },
    password: {
      required: [true, Msg.required('password')],
      minlength: [8, Msg.minLength('password', 8)],
      maxlength: [255, Msg.maxLength('password', 255)],
    },
  } as const;

  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
