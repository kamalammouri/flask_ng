import { Component, OnInit } from '@angular/core'
import { GeneraleService } from 'src/app/services/generale.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  historiqueInput: string = ''
  marierInput: string = ''
  revenuInput: string = ''
  data = this.generaleService.getData()
  constructor(private generaleService: GeneraleService) {}

  ngOnInit(): void {}

  sendData() {
    let data = {
      historique: this.historiqueInput,
      marier: this.marierInput,
      revenu: this.revenuInput,
    }
    console.log(this.historiqueInput)
    this.generaleService.addSimulation(data).subscribe(
      res => console.log(res)
    );
  }
}
