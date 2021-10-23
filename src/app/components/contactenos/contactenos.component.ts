import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.scss']
})
export class ContactenosComponent implements OnInit {

  titulo7: String= "Contactenos"

  contactenosForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.contactenosForm = this.fb.group({
      name: ['', Validators.required ],
      apell: ['', Validators.required ],
      email: ['', Validators.required ],
      dirr: ['', Validators.required ]
   });
  }

  ngOnInit(): void {

  }

  enviar(){
    alert("Registro enviado");
    this.nuevoForm();
  }

  nuevoForm(){
    this.contactenosForm = this.fb.group({
      name: ['', Validators.required ],
      apell: ['', Validators.required ],
      email: ['', Validators.required ],
      dirr: ['', Validators.required ]
   });
  }

}

