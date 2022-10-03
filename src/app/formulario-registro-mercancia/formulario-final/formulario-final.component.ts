import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-formulario-final',
  templateUrl: './formulario-final.component.html',
  styleUrls: ['./formulario-final.component.css']
})
export class FormularioFinalComponent implements OnInit {
[x: string]: any;
form: any;

  @ViewChild('formularioPaquetes') formularioPaquete: ElementRef | undefined;
  @ViewChild('btnPaquetes') btnPaquete:ElementRef | undefined;

  constructor(private renderer2:Renderer2) { }

  ngOnInit(): void {
  }

  

}
