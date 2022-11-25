import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { User, Usuario } from '../intefaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private dbase : AngularFirestore , private auth : AngularFireAuth){ }

  async login(name:string , pwd:string) {
    const {user} = await this.auth.signInWithEmailAndPassword(name , pwd);
    return user;
  }

  async logout(){
    await this.auth.signOut();
  }

  async obtenerUser(){
    const user : Usuario = await this.auth.currentUser;
    return user  
  }

  async registro(mail:string , pwd:string , name : string){
    try{
      const user = (await this.auth.createUserWithEmailAndPassword(mail , pwd)).user;
      var u : User = {
        nombre: name ,
        rol : "alumno" ,
        userUid : user.uid ,
        asignaturas: [] 
      };
      return await this.dbase.collection<User>('user').add(u);
    }catch(err){
      if(err.code == "auth/email-already-in-use") throw "Correo ya resgistrado";
      else if(err.code ==  'auth/invalid-email') throw "Correo No Valido";
      else if(err.code ==  'auth/weak-password') throw "Contraseña demasiada debil";
      else throw "Error al registrarce"
    }    
  }



  generarPerfi(){
    
    let usr : Usuario;

    this.auth.currentUser.then(u => {usr = u});

    let usuario : User ;
    usuario.userUid = usr.uid ;
    usuario.nombre = usr.displayName;
    usuario.rol = "alumno";
    usuario.asignaturas = [];

    this.dbase.collection('users').add(usuario).then(res => {
      console.log("Usuario creado:" + usuario);
    }).catch(e => {
      console.error("Error grenerar perfil" + e);
    })

  }
  

}
