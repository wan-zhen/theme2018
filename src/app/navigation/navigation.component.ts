import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    switchTheme(arg) {
      console.log(document.querySelector('link.app-theme').getAttribute('href'));
       const theme = `assets/custom-${arg}.css`;
       document.querySelector('link.app-theme').setAttribute('href', theme);
    }
  constructor(private breakpointObserver: BreakpointObserver) {}

}
