import { Component, OnInit, ChangeDetectorRef, NgZone, signal } from '@angular/core';
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

  selectedYear = signal('');
  missionCount = signal(0);

  constructor(
    private spacexService: Spacexapi,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.loadMissions();
  }

  loadMissions(): void {
    this.spacexService.getAllMissions().subscribe({
      next: (data) => {
        this.ngZone.run(() => {
          this.missions = data;
          this.missionCount.set(data.length);
          this.cdr.detectChanges();
        });
      },
      error: (err) => {
        console.error('error loading missions:', err);
      }
    });
  }

  filterByYear(year: string): void {
    this.selectedYear.set(year);

    if (!year || year.trim() === '') {
      this.loadMissions();
      return;
    }

    this.spacexService.getMissionsByYear(year).subscribe({
      next: (data) => {
        this.ngZone.run(() => {
          this.missions = data;
          this.missionCount.set(data.length);
          this.cdr.detectChanges();
        });
      },
      error: (err) => {
        console.error('error filtering missions by year:', err);
      }
    });
  }

  clearYearFilter(): void {
    this.selectedYear.set('');
    this.loadMissions();
  }
}