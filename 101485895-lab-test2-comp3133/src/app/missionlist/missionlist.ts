import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { Spacexapi } from '../network/spacexapi';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  standalone: false,
  templateUrl: './missionlist.html',
  styleUrls: ['./missionlist.css']
})
export class Missionlist implements OnInit {
  missions: Mission[] = [];

  constructor(
    private spacexService: Spacexapi,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    console.log('missionlist ngOnInit fired');
    this.loadMissions();
  }

  loadMissions(): void {
    this.spacexService.getAllMissions().subscribe({
      next: (data) => {
        console.log('missions loaded:', data);

        this.ngZone.run(() => {
          this.missions = data;
          this.cdr.detectChanges();
        });
      },
      error: (err) => {
        console.error('error loading missions:', err);
      }
    });
  }
}