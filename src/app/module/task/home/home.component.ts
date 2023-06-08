import { Component, OnInit } from '@angular/core';
import { baseUrl } from 'enviornment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgdata: any | null;
  constructor() { }
  userName: any
  ngOnInit(): void {
    this.userName = localStorage.getItem('userName') || null
    this.imgdata = baseUrl + localStorage.getItem('pic')
    //homepage read username
  }
}
