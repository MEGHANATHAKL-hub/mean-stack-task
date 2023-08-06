import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './shared/core.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { CdkTableModule } from '@angular/cdk/table';

import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
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
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { AllVideosListComponent } from './components/all-videos-list/all-videos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NewVideoComponent } from './components/new-video/new-video.component';
import { VideoStreamComponent } from './components/video-stream/video-stream.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AllVideosListComponent,
    SidebarComponent,
    NewVideoComponent,
    VideoStreamComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatDatepickerModule,
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
    MatChipsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatMenuModule,
    MatSliderModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatListModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatPaginatorModule,
    CdkTableModule,
    MatCheckboxModule,
    MatCommonModule,
    AsyncPipe,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
