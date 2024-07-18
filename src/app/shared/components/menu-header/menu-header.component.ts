import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { DashboardService } from 'src/app/modules/user-dashboard/service/dashboard.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit{
  //Output = Es usado para poder enviar datos a su componete padre
  @Output() buttonSidebarAction:EventEmitter<any>=new EventEmitter();
  nombre:string = 'Mark Salazar';
  status:boolean=false;
  isMaximized: boolean = false;


//--------------------------------

  nameComplete:string;
  rol:string;
  idPersona:number;
  modules:any[] = [];
  _authService =inject(AuthService)
  _dashboardService =inject(DashboardService)
  constructor(private router: Router) { 

  }
  ngOnInit(): void {
    this.getName()
    this.getModules()
  }

//--------------------------------



  
  //ciclos de vida de un componente 
  // ngOnInit(): void {
  // }
    btnAction(){
      if (this.status == false){
      this.status = !this.status;
      this.buttonSidebarAction.emit(this.status)
    }else  {
      this.status= ! this.status;
      this.buttonSidebarAction.emit(this.status)
    }
    }
    maximizeAction() {
      this.isMaximized = !this.isMaximized;
      
      if (this.isMaximized) {
        document.documentElement.requestFullscreen(); // Solicita pantalla completa
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen(); // Sale de pantalla completa
        }
      }
    }






//----------------------------------------




goToHome(): void {
  this.router.navigate(['/home/inicio']); // Navega al módulo "home"
}


goToProyecto(): void {
  this.router.navigate(['/home/proyecto']); // Navega al módulo "proyecto"
}
sidebarActive = false;

toggleSidebar() {
  this.sidebarActive = !this.sidebarActive;
}

getName(){
  this.nameComplete =sessionStorage.getItem('nombreCompleto');  
  this.rol =  sessionStorage.getItem('rol');
  this.idPersona = parseInt(sessionStorage.getItem('id'));
}

getModules(){
  this._dashboardService.getModules(this.idPersona)
  .subscribe(data=>{
    this.modules = data;
    console.log(this.modules)
  })
}



redirectToModule(moduleName: string): void {
  switch (moduleName.toLowerCase()) {
    case 'proyectos':
      this.router.navigate(['/home/proyecto']);
      break;
      
      case 'py_alumno':
        this.router.navigate(['/home/programa-proyecto']);
        break;
    case 'convenios':
      this.router.navigate(['/home/convenios']);
      break;
    case 'configuracion ':
      this.router.navigate(['/home/confi']);
      break;
    case 'seguridad':
      this.router.navigate(['/home/seguridad']);
      break;
    case 'informes':
      this.router.navigate(['/home/informes']);
      break;
      
    default:
      // Manejar otros casos o redirigir a una página predeterminada
      break;
  }
}


redirectToAuth(): void {
  this.router.navigate(['/auth']); 
}
}






