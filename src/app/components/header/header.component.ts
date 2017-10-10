import { Component, OnInit } from '@angular/core';

declare var JQuery: any;
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openMenu(){
    $('.menu').css({'right': '0px'});
    console.log('entro');
  }
  closeMenu(){
    $('.menu').css({'right':'-500px'});
  }
}
