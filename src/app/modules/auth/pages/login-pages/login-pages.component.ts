import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Auth } from 'src/app/models/auth';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css']
})
export class LoginPagesComponent implements OnInit {

  value: string = "";
  // Instancia del modelo Auth que contiene las credenciales de usuario

  auth: Auth = new Auth();
  // Formulario Reactivo que contiene los campos de usuario y contraseña

  formInputs: FormGroup = new FormGroup({});
  // Variable que indica si los datos de la sesión son válidos o no

  verifyDataSession: boolean = false;
  // Instancia del servicio de autenticación

  _authService = inject(AuthService);

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Inicialización del formulario reactivo en el ciclo de vida OnInit

    this.initInputs();
  }
  // Método para inicializar el formulario reactivo

  public initInputs(): void {
    this.formInputs = new FormGroup({
      // Campo de entrada para el usuario con validaciones

      user: new FormControl(this.auth.user, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]),
      // Campo de entrada para la contraseña con validaciones

      pass: new FormControl(this.auth.pass, [
        Validators.required
      ])
    });
  }


  // Método para manejar el inicio de sesión

  public login(): void {
    // Obtener las credenciales del formulario

    this.auth = this.formInputs.value;
    // Llamar al servicio de autenticación para verificar las credenciales

    this._authService.getModulesVerifyCount(this.auth)
      .subscribe(data => {
        // Si las credenciales son válidas, almacenar información en la sesión y redirigir al dashboard

        if (data != null) {
          sessionStorage.setItem('id', data[0].ID_PERSONA);
          sessionStorage.setItem('nombreCompleto', `${data[0].NOMBRE} ${data[0].APELLIDO}`);
          sessionStorage.setItem('rol', data[0].NOMBRE_ROL);
          this.router.navigate(['/dashboard'])
        }
      }, (err) => {
        // Manejar errores de la solicitud HTTP (por ejemplo, credenciales no válidas)

        console.log(err)
      })

  }
}
