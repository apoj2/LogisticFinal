import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioRemitenteComponent } from './formulario-remitente.component';

describe('FormularioRemitenteComponent', () => {
  let component: FormularioRemitenteComponent;
  let fixture: ComponentFixture<FormularioRemitenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioRemitenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioRemitenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
