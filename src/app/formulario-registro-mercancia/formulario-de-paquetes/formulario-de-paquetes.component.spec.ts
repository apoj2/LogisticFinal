import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDePaquetesComponent } from './formulario-de-paquetes.component';

describe('FormularioDePaquetesComponent', () => {
  let component: FormularioDePaquetesComponent;
  let fixture: ComponentFixture<FormularioDePaquetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDePaquetesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDePaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
