import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleAsistenciaPagePage } from './detalle-asistencia-page.page';

describe('DetalleAsistenciaPagePage', () => {
  let component: DetalleAsistenciaPagePage;
  let fixture: ComponentFixture<DetalleAsistenciaPagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAsistenciaPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleAsistenciaPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
