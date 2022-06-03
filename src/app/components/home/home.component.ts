import { Component, OnInit } from '@angular/core'
import { GeneraleService } from 'src/app/services/generale.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  historiqueInput: any = 0
  marierInput: any = 0
  revenuInput: any ;
  data: any
  constructor(private generaleService: GeneraleService) {}

  ngOnInit(): void {}

  sendData() {
    let data = [parseInt(this.historiqueInput), parseInt(this.marierInput), parseInt(this.revenuInput)]
    console.log(data);
    
    this.generaleService
      .addSimulation(data)
      .subscribe((res) => console.log(res))
  }

  getData() {
    this.generaleService.getData().subscribe((res) => {
      this.data = res
      console.log(this.data)
    })
  }
}
