import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivatePageLayoutComponent } from '../../../shared/layouts/private-page-layout/private-page-layout.component';
import { ProjectsListPageComponent } from './projects-list-page/projects-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: PrivatePageLayoutComponent,
    children: [{ path: '', component: ProjectsListPageComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
