import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllVideosListComponent } from './components/all-videos-list/all-videos-list.component';
import { NewVideoComponent } from './components/new-video/new-video.component';

const routes: Routes = [
  { path: '', component: AllVideosListComponent },
  { path: 'videoslist', component: AllVideosListComponent },
  { path: 'new-video', component: NewVideoComponent },
  { path: 'en', redirectTo: '' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
