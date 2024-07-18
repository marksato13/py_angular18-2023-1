import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-home-pages',
  templateUrl: './home-pages.component.html',
  styleUrls: ['./home-pages.component.css']
})
export class HomePagesComponent implements OnInit {

  sidebarStatusLarge:boolean=false;
  ngOnInit(): void{
  }
  getData(status:any){
this.sidebarStatusLarge=status;

}
}
