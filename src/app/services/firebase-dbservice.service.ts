import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Usuario , User} from '../intefaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDBServiceService {


  constructor(private dbase : AngularFirestore , private auth : AngularFireAuth) { 
    
  }


  requestData() {
    return new Promise<any>(async (resolve) => {
      try{
        var uid = (await this.auth.currentUser).uid;
        this.dbase.collection<User>('user', ref => ref.where('userUid' , '==' , uid).limit(1)).get().subscribe(user => resolve(user.docs[0].data()));
      }catch(e){
        //throw "Usuario invalido";
        return new Error("Usuario invalido")
      }
    });
    

  }

  
}
