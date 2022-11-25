import { Injectable } from '@angular/core';
import { User } from './user';
import { v4 as uuID } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [
    {
      id: uuID(),
      tipo: "profesor",
      nombre: "Francisco Juliet",
      user: "fran.j",
      pwd: "profe"
    },
    {
      id: uuID(),
      tipo: "alumno",
      nombre: "alambrito castro",
      user: "alam.cas",
      pwd: "1234"
    },
    {
      id: uuID(),
      tipo: "alumno",
      nombre: "patricio carlos bustos",
      user: "patocarlo.bustos",
      pwd: "1234"
    }
  ];

  constructor() {
  }

  getUsers(): User[]{
    return this.users;
  }

  actualizarUsuario(usuario){
    var index = this.users.findIndex(usu => usu.id == usuario.id);
    this.users[index] = usuario;
  }
  obtenerUsuario(id: string){
    return this.users.find(usu => usu.id == id);
  }
  obtenerUsuarios(){
    return this.users;
  }

  //MÉTODO CUSTOMER POSIBLES:
  validarLogin(user, password){
    return this.users.find(usu => usu.user == user && usu.pwd == password);
  }

}
