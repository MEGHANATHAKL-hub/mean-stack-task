import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './shared/core.module';
import { CdkTableModule } from '@angular/cdk/table';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCommonModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { MatNativeDateModule } from '@angular/material/core';
import { AllVideosListComponent } from './components/all-videos-list/all-videos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewVideoComponent } from './components/new-video/new-video.component';
import { VideoStreamComponent } from './components/video-stream/video-stream.component';
import { VideoStreamHttpComponent } from './components/video-stream-http/video-stream-http.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllVideosListComponent,
    SidebarComponent,
    NewVideoComponent,
    VideoStreamComponent,
    VideoStreamHttpComponent,
    FileUploadComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatInputModule,
    MatTableModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    CdkTableModule,
    MatCommonModule,
    AsyncPipe,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
