import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Iplayer } from '../models/player';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['/src/assets/styles/geral.css'],
})
export class ProfileComponent implements OnInit {
  public userPlayer: Iplayer;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.getPlayer().subscribe(
      (player: Iplayer) => {
        this.userPlayer = player;
        console.log(this.userPlayer);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
