import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/shared/services/app.service';
import { VideoStreamComponent } from '../video-stream/video-stream.component';
import { VideoStreamHttpComponent } from '../video-stream-http/video-stream-http.component';

@Component({
  selector: 'app-all-videos-list',
  templateUrl: './all-videos-list.component.html',
  styleUrls: ['./all-videos-list.component.scss']
})

export class AllVideosListComponent {
  stickyHeader: boolean = true;
  displayedColumns: string[] = ['position', 'name', 'http', 'socket'];
  dataSource: any;

  constructor(private appService: AppService, private router: Router, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.appService.getFiles()
      .subscribe((response: any) => {
        console.log('response receved is ', response);
        this.dataSource = new MatTableDataSource(response);
      })
  }


  edit(id: any) {
    this.router.navigateByUrl(`edit/alert/${id}`)
      .then(() => {
      })
  }

  selectedVideoUsingSocket(fileName: string) {
    const selectedFileDailog = this.dialog.open(VideoStreamComponent, {
      data: { fileName: fileName }
    });

    selectedFileDailog.afterClosed().subscribe(result => {
    });
  }

  selectedVideoUsingHttp(fileName: string) {
    const selectedFileDailog = this.dialog.open(VideoStreamHttpComponent, {
      data: { fileName: fileName }
    });

    selectedFileDailog.afterClosed().subscribe(result => {
    });
  }

}
