import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MissionlistComponent } from './component/missionlist/missionlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MissionlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101376641-lab-test2-comp3133';
}
