import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../../services/firebase-service.service'
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  user: string;
  password: string;

  constructor(private toastController: ToastController, private router: Router, private fire: FirebaseServiceService) { }

  ngOnInit() {
  }
  login(){

    this.fire.login(this.user , this.password).then(usr =>{
      this.router.navigate(["/home-page"]);
    } ).catch(()=>{
      this.toastError('USUARIO O CONTRASEÑA INCORRECTOS!');
    });

    
  }

  async toastError(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
