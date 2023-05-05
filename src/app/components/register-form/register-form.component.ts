import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente/cliente.module';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  public cliente: Cliente = {
    cedula:"",
  nombres:" ",
  apellidos:" ",
  telefono: 0,
  email:" ",
  ocupacion:" ",
  fecha: new Date,
  usuario:" "
  };

  constructor() {}

  guardarCliente(cliente: Cliente) {
    console.log(cliente)
  }

}
