import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  role = '';
  isSidebarOpen: boolean = false;
  permissions: any = [];
  telasDefault: any = null;
  sideListOriginal: any;
  innerHTML = '';
  mobileQuery!: MediaQueryList;

  private _mobileQueryListener!: () => void;

  constructor(
    // private token: TokenJwtService,
    // private loginService: LoginService,
    // private permissionService: PermissionsGuardService,
    // private telaService: TelaObservableService,
    private mediaMatcher: MediaMatcher
  ) {
    this.mobileQuery = this.mediaMatcher.matchMedia('(max-width: 1100px)');
    this._mobileQueryListener = () => {
      // console.log('Tamanho da tela mudou:', this.mobileQuery.matches);
    };
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  async ngOnInit() {

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

}
