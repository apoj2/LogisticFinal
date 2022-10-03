import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDestinatarioComponent } from './formulario-destinatario.component';

describe('FormularioDestinatarioComponent', () => {
  let component: FormularioDestinatarioComponent;
  let fixture: ComponentFixture<FormularioDestinatarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioDestinatarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDestinatarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
