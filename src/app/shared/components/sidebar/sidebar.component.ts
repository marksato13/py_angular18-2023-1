import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuHeaderService } from '../service/menu-header.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input('sidebarStatusLarge')
  sidebarStatusLarge: boolean = false;
  persona: string = '';
  menus: Array<any>=[]
  _menuHeader=inject(MenuHeaderService)
  /*menus: Array<any> = [
    {
      link: '/home/informes',
      name: ' GESTION INFORMES ',
      icon: 'fa-solid fa-file-contract',
    },
    {
      link: '/home/proyecto',
      name: 'GESTION PROYECTOS',
      icon: 'fa-solid fa-file-contract',
    },
    {
      link: '/home/jornada',
      name: 'GESTION JORNADAS',
      icon: 'fa-solid fa-file-contract',
    },
    {
      link: '/home/equipo',
      name: 'GESTION EQUIPOS',
      icon: 'fa-solid fa-file-contract',
    },
    {
      link: '/home/convenios',
      name: 'GESTION CONVENIOS',
      icon: 'fa-solid fa-file-contract',
    },
    {
      link: '/home/programa-proyecto',
      name: 'GESTION PY  ALUMN',
      icon: 'fa-solid fa-file-contract',
    },
    {
      link: '/home/pylider',
      name: 'GESTION PY  LIDER',
      icon: 'fa-solid fa-file-contract',
    },

    {
      link: '/home/confi',
      name: 'GESTION CONFIGURACION',
      icon: 'fa-solid fa-file-contract',
    },

  ]*/
  constructor(private router: Router) {}
  ngOnInit(): void {
    this._menuHeader.sidebar.subscribe(data=> {
      this.menus = data;
      console.log(this.menus)
    })
  }

  toggleSubMenu(menu: any): void {
    menu.open = !menu.open; 
  }
     redirectToAuth(): void {
      this.router.navigate(['/dashboard']); 
     }
}
