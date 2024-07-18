// user-dashboard-pages.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../service/dashboard.service';
import { AuthService } from 'src/app/modules/auth/service/auth.service';
import { MenuHeaderService } from 'src/app/shared/components/service/menu-header.service';

@Component({
  selector: 'app-user-dashboard-pages',
  templateUrl: './user-dashboard-pages.component.html',
  styleUrls: ['./user-dashboard-pages.component.css']
})
export class UserDashboardPagesComponent implements OnInit {

  nameComplete: string;
  rol: string;
  idPersona: number;
  modules: any[] = [];
  //----------------------------------------------------------------
  //rutitas de Admin
  accesosAdminc: any[] = [
    {
      name: "ConfiguracionAd",
      url: "/home/confi",
      icon: 'fa-solid fa-bars-progress'
    }
  ]
  accesosAdminP: any[] = [
    {
      name: "ProyectosAd",
      url: "/home/proyecto",
      icon: 'fa-solid fa-bars-progress'
    },
    {
      name: "JornadaAd",
      url: "/home/jornada/proyecto",
      icon: 'fa-solid fa-bars-progress'
    },
    {
      name: "EquiposAd",
      url: "/home/equipo",
      icon: 'fa-solid fa-bars-progress'
    }
  ]
  accesosAdminI: any[] = [
    {
      name: "InformesAd",
      url: "/home/informes",
      icon: 'fa-solid fa-bars-progress'

    }
  ]
  accesosAdminC: any[] = [
    {
      name: "ConveniosAd",
      url: "/home/convenios",
      icon: 'fa-solid fa-bars-progress'

    }
  ]
  accesosAdminS: any[] = [
    {
      name: "SegurityAd",
      url: "/home/seguri",
      icon: 'fa-solid fa-bars-progress'
    }
  ]
  //----------------------------------------------------------------
  //rutitas de Alumno
  accesosAlumnoP: any[] = [
    {
      name: "ProyectosAn",
      url: "/home/programa-proyecto",
    }
  ]
  accesosAlumnoC: any[] = [
    {
      name: "ConveniosAn",
      url: ""
      
    }
  ]
  //----------------------------------------------------------------
  //rutitas de Lider

accesosLiderP: any[] = [
  {
    name: "ProyectoL",
    url: "/home/programa-proyecto",
    icon: 'fa-solid fa-bars-progress'

  }
]
accesosLiderI: any[] = [
  {
    name: "InformesL",
    url: "/home/informes",
    icon: 'fa-solid fa-bars-progress'

  }
]
  accesosLiderC: any[] = [
    {
      name: "ConfiguracionL",
      url: ""
    }
  ]

  //----------------------------------------------------------------
  //rutitas de Admin
  accesosCordiC: any[] = [
    {
      name: "ConfiguracionAd",
      url: ""
    }
  ]
  accesosCordiP: any[] = [
    {
      name: "ProyectosAd",
      url: "/home/proyecto",
      icon: 'fa-solid fa-bars-progress'
    },
    {
      name: "JornadaAd",
      url: "/home/jornada/proyecto",
      icon: 'fa-solid fa-bars-progress'
    },
    {
      name: "EquiposAd",
      url: "/home/equipo",
      icon: 'fa-solid fa-bars-progress'
    }
  ]
  accesosCordiI: any[] = [
    {
      name: "InformesAd",
      url: "/home/informes",
      icon: 'fa-solid fa-bars-progress'

    }
  ]
  accesosCordiCn: any[] = [
    {
      name: "ConveniosAd",
      url: ""
    }
  ]

  _authService = inject(AuthService)
  _menuHeader = inject(MenuHeaderService)
  _dashboardService = inject(DashboardService)
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.getName()
    this.getModules()
  }

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

  getName() {
    this.nameComplete = sessionStorage.getItem('nombreCompleto');
    this.rol = sessionStorage.getItem('rol');
    this.idPersona = parseInt(sessionStorage.getItem('id'));
  }

  getModules() {
    this._dashboardService.getModules(this.idPersona)
      .subscribe(data => {
        this.modules = data;
        console.log(this.modules)
      })
  }



  redirectToModule(moduleName: string): void {
    console.log(moduleName)
    let rol = sessionStorage.getItem("rol")
    switch (moduleName.toLowerCase()) {
      case 'proyectos':
        if (rol == 'Administrador') {
          this._menuHeader.sidebar.next(this.accesosAdminP)
          this.router.navigate(['/home/proyecto']);
        } else if (rol == 'Coordinador') {
          this._menuHeader.sidebar.next(this.accesosCordiP)
          this.router.navigate(['/home/proyecto']);
        }
        break;


      case 'configuracion ':
        if (rol == 'Administrador') {
          this._menuHeader.sidebar.next(this.accesosAdminc);
          this.router.navigate(['/home/confi']);
        }  else if (rol == 'Coordinador') {
          this._menuHeader.sidebar.next(this.accesosCordiCn)
          this.router.navigate(['/home/confi']);
        }
        break;


      case 'convenios':
        if (rol == 'Administrador') {
          this._menuHeader.sidebar.next(this.accesosAdminC);
          this.router.navigate(['/home/convenios']);
        } else if (rol == 'Coordinador') {
          this._menuHeader.sidebar.next(this.accesosCordiCn)
          this.router.navigate(['/home/convenios']);
        }
        break;

      case 'seguridad':
        if (rol == 'Administrador') {
          this._menuHeader.sidebar.next(this.accesosAdminS);
          this.router.navigate(['/home/seguri']);
        }
        break;



      case 'py_alumno':
        if (rol == 'alumno') {
          this._menuHeader.sidebar.next(this.accesosAlumnoP)
          this.router.navigate(['/home/programa-proyecto']);
        } else if (rol =='lider') {
          this._menuHeader.sidebar.next(this.accesosLiderP)
          this.router.navigate(['/home/programa-proyecto']);
        }
        break;


        
      case 'informes':
        if (rol == 'Administrador') {
          this._menuHeader.sidebar.next(this.accesosAdminI)
          this.router.navigate(['/home/informes']);
        } else if (rol == 'lider') {
          this._menuHeader.sidebar.next(this.accesosLiderI)
          this.router.navigate(['/home/informes']);
        }    
         else if (rol == 'Coordinador') {
          this._menuHeader.sidebar.next(this.accesosCordiI)
          this.router.navigate(['/home/informes']);
        }       break;

      default:
        break;
    }


  }


  redirectToAuth(): void {
    this.router.navigate(['/auth']);
  }
}
