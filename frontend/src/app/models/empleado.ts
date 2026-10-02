export class Empleado {
  constructor(_id = '', name = '', correo = '') {
    this._id = _id;
    this.name = name;
    this.correo = correo;
  }

  _id: string;
  name: string;
  correo: string;
}