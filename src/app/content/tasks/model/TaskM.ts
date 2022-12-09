export class TaskM {
  _id?: string;
  name: string;
  description?: string;
  type?: string;

  constructor(name: string, description: string, id?: string) {
    this._id = id;
    this.name = name;
    this.description = description;
  }
}
