import { Component } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { requiredFileType } from 'src/app/utils/upload-file-validators';
import { HttpEventType } from '@angular/common/http'

import { Router } from '@angular/router'

@Component({
  selector: 'app-new-video',
  templateUrl: './new-video.component.html',
  styleUrls: ['./new-video.component.scss']
})
export class NewVideoComponent {
  errorMessage: string;
  errorMessageStatus: boolean = false;

  constructor(private appService: AppService, private router: Router) {
  }

  form = new FormGroup({
    file: new FormControl(null, [Validators.required, requiredFileType(['video/mp4'])])
  });

  ngOnInit() {

  }

  submit() {
    this.errorMessageStatus = false;
    this.appService.uploadFile(toFormData(this.form.value))
      .subscribe((event: any) => {

        if (event.type === HttpEventType.Response) {
          console.log(event.body);
          this.form.reset();
          this.router.navigateByUrl('videoslist')
            .then(() => {
            })
        }
      },
        ({ error }) => {
          this.errorMessageStatus = true;
          this.errorMessage = error
          console.log(error);
        })
  }
}


export function toFormData<T>(formValue: any) {
  const formData = new FormData();

  for (const key of Object.keys(formValue)) {
    const value = formValue[key];
    formData.append(key, value);
  }
  return formData;
}