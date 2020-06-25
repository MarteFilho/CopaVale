import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public partidas$: any[];
  public team$: any[];
  matches: any[] = [];
  public Data = new Date().getDate();
  public Mes = new Date().getMonth();


  constructor(private data: DataService) { 
  }

  ngOnInit(): void {
    this.data.getPartidasAgendadas().subscribe((data: any)=> {
      this.matches = data.items.sort((prev, next) => (prev.scheduled_at > next.scheduled_at ? 1 : -1) )
      .map(dados => ({
        competition_name: dados.competition_name,
        teams: dados.teams,
        faction1: dados.faction1,
        faction2: dados.faction2,
        avatar1: this.imagenotNull(dados.teams.faction1.avatar),
        avatar2: this.imagenotNull(dados.teams.faction2.avatar),
        scheduled_at: this.timetoDate(dados.scheduled_at),
        hora: this.timetoHour(dados.scheduled_at),
        group: dados.group,
        faceit_url: this.languagePT(dados.faceit_url),
        
      }));
    })
    console.log(this.matches);
  }

  timetoDate(time: number): string{


    let data = new Date(time * 1000);
    let mes = data.getMonth() + 1;
    return `${data.getDate()}/${mes > 9 ? mes: '0' + mes}/${data.getFullYear()}`;
  }

  timetoHour(time: number): string{


    let data = new Date(time * 1000);
    let hora = data.getHours();
    let minuto = data.getMinutes();
    return `${hora > 9 ? hora: '0' + hora}:${minuto > 9 ? minuto: '0' + minuto}`;
  }

  languagePT(url: string): string{

    let result = url.replace(/{lang}/gi, "pt");
    return result;
  }

imagenotNull(url: string): string{

  let URL = url.toString();

  if (url){
  return url;
  }
  else{
    return 'https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png';
  }
  

}

}