import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SigningService } from '../service/signing.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  // submit(formData:NgForm){
  //   console.log(formData);
  //  }

  constructor(private service: SigningService, private snackbar: MatSnackBar) { }
  userPic: any
  ngOnInit(): void {
  }

  signup(formData: any) {
    const uploadedData = new FormData()
    uploadedData.append('name', formData['name'])
    uploadedData.append('email', formData['email'])
    uploadedData.append('mobile', formData['mobile'])
    uploadedData.append('password', formData['password'])
    if (this.userPic != undefined) {
      uploadedData.append('image', this.userPic)
    }
    this.service.PostTask(uploadedData).subscribe((res: { statusCode: number, message: string }) => {
      if (res.statusCode == 201) {
        this.showSnackBar(res.message, 'snackBarSuccess')
      }
      else {
        this.showSnackBar(res.message, 'snackBarDanger')
      }
    })
  }

  onImageChanged(event: any) {
    this.userPic = event.target.files[0]
    console.log(this.userPic)
  }
  showSnackBar(message: string, style: string) {
    this.snackbar.open(message, 'X', {
      panelClass: style,
      duration: 2000
    },)
  }
}


