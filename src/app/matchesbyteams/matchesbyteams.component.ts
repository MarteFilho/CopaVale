import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-matchesbyteams',
  templateUrl: './matchesbyteams.component.html',
  styleUrls: ['./matchesbyteams.component.css'],
})
export class MatchesbyteamsComponent implements OnInit {
  public form: FormGroup;
  public busy: boolean;
  public exists: boolean;
  matches: any;
  constructor(
    private data: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      team: [
        '',
        Validators.compose([
          Validators.minLength[3],
          Validators.maxLength[50],
          Validators.required,
        ]),
      ],
    });
    this.exists = false;
  }

  public submit() {
    this.busy = true;
    this.data
      .getPartidasAgendadas()
      .pipe(
        concatMap((result) => {
          this.matches = result.items;
          return this.data.getPartidasAgendadas2();
        })
      )
      .subscribe((data: any) => {
        this.matches = [...this.matches, ...data.items]
          .sort((prev, next) =>
            prev.scheduled_at > next.scheduled_at ? 1 : -1
          )
          .map((dados) => ({
            competition_name: dados.competition_name,
            teams: dados.teams,
            faction1: dados.teams.faction1,
            faction2: dados.teams.faction1,
            avatar1: this.imagenotNull(dados.teams.faction1.avatar),
            avatar2: this.imagenotNull(dados.teams.faction2.avatar),
            scheduled_at: this.timetoDate(dados.scheduled_at),
            hora: this.timetoHour(dados.scheduled_at),
            group: dados.group,
            faceit_url: this.languagePT(dados.faceit_url),
          }));
        this.matches = this.matches.filter(
          (partida) =>
            partida.teams.faction1.name === this.form.value.team ||
            partida.teams.faction2.name === this.form.value.team
        );
        console.log(this.matches);
        if (this.matches.length == 0) {
          this.exists = false;
          this.toastr.error('Nenhum time ou partida encontrado!', '', {
            positionClass: 'toast-top-center',
          });
        } else {
          this.exists = true;
        }

        this.busy = false;
      });
  }

  timetoDate(time: number): string {
    let data = new Date(time * 1000);
    let mes = data.getMonth() + 1;
    return `${data.getDate()}/${
      mes > 9 ? mes : '0' + mes
    }/${data.getFullYear()}`;
  }

  timetoHour(time: number): string {
    let data = new Date(time * 1000);
    let hora = data.getHours();
    let minuto = data.getMinutes();
    return `${hora > 9 ? hora : '0' + hora}:${
      minuto > 9 ? minuto : '0' + minuto
    }`;
  }

  languagePT(url: string): string {
    let result = url.replace(/{lang}/gi, 'pt');
    return result;
  }

  imagenotNull(url: string): string {
    let URL = url.toString();

    if (url) {
      return url;
    } else {
      return 'https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png';
    }
  }
}
