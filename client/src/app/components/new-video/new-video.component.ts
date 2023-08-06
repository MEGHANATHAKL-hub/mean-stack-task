import { Component } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';

import { Router }  from '@angular/router'

@Component({
  selector: 'app-new-video',
  templateUrl: './new-video.component.html',
  styleUrls: ['./new-video.component.scss']
})
export class NewVideoComponent {

  uploadedFile:Array<File>;

  constructor(private appService : AppService, private router: Router){

  }
  
  ngOnInit(){
    
  }

  fileChange(element:any){
    this.uploadedFile = element.target.files;
    console.log(this.uploadedFile)
  }

  upload(){
    let formData = new FormData();
    formData.append("file", this.uploadedFile[0]);

    console.log(formData)

    this.appService.uploadFile(formData)
    .subscribe((response)=>{
      console.log('response receved is ', response);
      this.router.navigateByUrl('videoslist')
      .then(()=> {
      })

    })
  }

}
