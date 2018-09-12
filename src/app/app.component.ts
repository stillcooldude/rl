import { Component } from '@angular/core';
import { CoreService } from './core/service/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tour-logistic';

  constructor(public coreService: CoreService){

  }

  onClick(){
    this.coreService.getData();
  }
}
