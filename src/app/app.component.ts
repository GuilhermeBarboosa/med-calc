import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { fromEvent, map } from 'rxjs';

export const SCROLL_CONTAINER = 'mat-sidenav-content';
export const TEXT_LIMIT = 50;
export const SHADOW_LIMIT = 100;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'med-calc';

  popText = false;
  applyShadow = false;

  public isSmallScreen = false;
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    const content = document.getElementsByClassName(`${SCROLL_CONTAINER}`)[0];
    fromEvent(content, 'scroll')
      .pipe(map(() => content.scrollTop))
      .subscribe({
        next: (value) => this.determineHeader(value),
      });
  }

  determineHeader(top: number) {
    console.log(top)
    this.popText = top >= TEXT_LIMIT;
    this.applyShadow = top >= SHADOW_LIMIT;
  }

  ngAfterContentInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .pipe()
      .subscribe((res: any) => {
        this.isSmallScreen = res.matches;
      });
  }

  get sidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }
}
