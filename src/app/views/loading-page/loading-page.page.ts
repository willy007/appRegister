import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.page.html',
  styleUrls: ['./loading-page.page.scss'],
})
export class LoadingPagePage implements OnInit {

  constructor(private animationCtrl: AnimationController ,private router: Router) { }

  ngOnInit() {
    const Animation = this.animationCtrl.create()
    .addElement(document.querySelector('#icono'))
    .duration(1000)
    .iterations(Infinity)
    .fromTo('transform', 'rotate(0deg)', 'rotate(360deg)');

    Animation.play();

    setTimeout( () => {
      this.router.navigate(['/login-page']);
    }, 2000); 

  }

  

}
