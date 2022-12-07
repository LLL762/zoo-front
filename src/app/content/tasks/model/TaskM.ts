export class TaskM {
  _id?: string;
  name: string;
  description?: string;

  constructor(name: string, description: string, id?: string) {
    this._id = id ?? undefined;
    this.name = name;
    this.description = description;
  }
}
