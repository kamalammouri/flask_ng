import { Component, OnInit } from '@angular/core';
import { GeneraleService } from 'src/app/services/generale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data=this.generaleService.getData();
  constructor(private generaleService:GeneraleService) { }

  ngOnInit(): void {
  }

}
