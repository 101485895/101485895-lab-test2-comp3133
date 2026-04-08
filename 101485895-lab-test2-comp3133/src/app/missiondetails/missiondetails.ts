import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spacexapi } from '../network/spacexapi';
import { Mission } from '../models/mission';
import { Location } from '@angular/common';

@Component({
  selector: 'app-missiondetails',
  standalone: false,
  templateUrl: './missiondetails.html',
  styleUrls: ['./missiondetails.css']
})
export class Missiondetails implements OnInit {
  mission?: Mission;

  constructor(
    private route: ActivatedRoute,
    private spacexService: Spacexapi,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone,
    private location: Location
  ) {}

  ngOnInit(): void {
    const flightNumber = this.route.snapshot.paramMap.get('flight_number');

    if (flightNumber) {
      this.spacexService.getMissionByFlightNumber(flightNumber).subscribe({
        next: (data) => {
          this.ngZone.run(() => {
            this.mission = data;
            this.cdr.detectChanges();
          });
        },
        error: (err) => {
          console.error('error loading mission details:', err);
        }
      });
    }
  }

  goBack(): void {
  this.location.back();
  }
}