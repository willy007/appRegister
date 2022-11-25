import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.page.html',
  styleUrls: ['./registro-page.page.scss'],
})
export class RegistroPagePage implements OnInit {

  constructor(
    private toastController: ToastController ,
    private router: Router, 
    private fire: FirebaseServiceService,
    public formBuilder: FormBuilder
  ) { }

  registerFrom: FormGroup;
  isEnviado = false; 


  ngOnInit() {
    this.registerFrom = this.formBuilder.group({
      mail: ['', [Validators.required , Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      name: ['' , [Validators.required , Validators.minLength(4)]],
      password: ['',[Validators.required , Validators.minLength(6)]]
    });
  }

  get errorControl() {
    return this.registerFrom.controls;
  }

  Registro(){

    this.isEnviado = true;
    if(!this.registerFrom.valid){
      return;
    }else{
      var mail  = this.registerFrom.controls['mail'].value;
      var name  = this.registerFrom.controls['name'].value;
      var pwd  = this.registerFrom.controls['password'].value; 

      console.log(mail);
      console.log(name);
      console.log(pwd);

      this.fire.registro(mail , pwd , name).then((r) => {
        this.router.navigate(["/login-page"]);
      }).catch((e) => {
        this.toastError(e);
      });
    }
 
  }

  async toastError(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
