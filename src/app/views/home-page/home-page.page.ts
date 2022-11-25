import { AfterViewInit, Component, OnInit } from '@angular/core';
import { User } from 'src/app/intefaces/interfaces';
import { FirebaseServiceService } from 'src/app/services/firebase-service.service';
import { FirebaseDBServiceService } from 'src/app/services/firebase-dbservice.service';
import { ActionSheetController, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit , AfterViewInit {

  //cantidad de dias registrados, procentaje de proemdio de asistencia de los alumnos  
  loading : HTMLIonLoadingElement;
  isLoading:boolean;
  user: User;
  isAlumno: boolean;

  constructor(
    private fire: FirebaseServiceService,
    private alert: AlertController,
    private router: Router,
    private db: FirebaseDBServiceService,
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController
  ){

  }

  ngAfterViewInit(): void {
    this.obtenerInfo();
  }

  ngOnInit() {
    this.user = {
      nombre : "",
      rol : "",
      asignaturas: [],
      userUid: ""
    }
  }

  async obtenerInfo(){

     

    this.loading = await this.loadingCtrl.create({
      message: 'Cargando...',
    });

    setTimeout(()=>{
      if(this.isLoading){
        this.fire.logout();
        this.router.navigate(['/login-page']);
        this.loading.dismiss();
        this.isLoading = false;
      }
    } , 6000);

    this.loading.present();
    this.isLoading = true;
    
    this.db.requestData().then(usr => {
      this.user = usr;
      console.log(this.user);
      this.loading.dismiss();
      this.isLoading = false;
      this.validarRol();
     }).catch((err) => {
      console.log(err);
      this.fire.logout();
      this.router.navigate(['/login-page']);
      this.loading.dismiss();
      this.isLoading = false;
     }).finally(() =>{
      this.loading.dismiss();
      this.isLoading = false;
     });
  }

  validarRol(){
    if(this.user.rol == 'alumno'){
      this.isAlumno = true;
    }else{
      this.isAlumno = false;
    }
    
  }

  async btnHome(){
    const actionSheet = await this.actionSheetCtrl.create({

      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'cerrar sesion',
          handler: ()=>{
            this.fire.logout();
            this.router.navigate(['/login-page']);
          },
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    actionSheet.present();
  }

  
    
    
  

  async toastError(msg: string) {
    const toast = await this.alert.create({
      header:"Error",
      message: msg,
      buttons: [
        {
          text: "Volver",
          handler: ()=>{
            this.router.navigate(['/login-page']);
          }
        }
      ]
    });
    toast.present();
  }

}
