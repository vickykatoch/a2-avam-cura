import { Component } from '@angular/core';

import '../../node_modules/primeng/resources/themes/omega/theme.css';
import '../../node_modules/primeng/resources/primeng.min.css';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../style/base.scss';

@Component({
       selector: 'avam-cura', 
       templateUrl: './app.component.html'
})
export class AppComponent{
      public appTitle : string = 'AVAM CURA';
      constructor(){}
}