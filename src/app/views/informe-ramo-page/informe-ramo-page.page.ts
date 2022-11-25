import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informe-ramo-page',
  templateUrl: './informe-ramo-page.page.html',
  styleUrls: ['./informe-ramo-page.page.scss'],
})
export class InformeRamoPagePage implements OnInit {

  public data = ['Angelo Perez' ,  'Carlitos Mejias', 'Patricio Bustos', 'Agustin Angol', 'Coni Astorga', 'Pedro Algarrobos', 'Mario Alcaino', 'Maria Prado', 'Juan Rios', 'Catalna Alberrios'];
  public results = [...this.data];

  handleChange(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }


  constructor() { }

  ngOnInit() {
  }

}
