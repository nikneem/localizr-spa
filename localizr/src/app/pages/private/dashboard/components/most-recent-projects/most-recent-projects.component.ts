import { Component } from '@angular/core';
import { SharedComponentsModule } from '../../../../../shared/shared-components/shared-components.module';
import { IRecentProject } from '../../../../../states/projects/project-models';

@Component({
  selector: 'lcl-most-recent-projects',
  imports: [SharedComponentsModule],
  templateUrl: './most-recent-projects.component.html',
  styleUrl: './most-recent-projects.component.scss',
})
export class MostRecentProjectsComponent {
  projects: Array<IRecentProject> = [];
}
