import { Component } from '@angular/core';
import { faSignOutAlt,faUserAlt,faBriefcase,faChartBar,faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend-SystemERP';
  faSignOut = faSignOutAlt;
  faUser = faUserAlt;
  faBriefcase = faBriefcase;
  faTachometer = faTachometerAlt;
  protected readonly faChartBar = faChartBar;
}
