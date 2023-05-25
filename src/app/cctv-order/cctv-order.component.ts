import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-cctv-order',
  templateUrl: './cctv-order.component.html',
  styleUrls: ['./cctv-order.component.css']
})
export class CctvOrderComponent {
  closeForm=true;
  projectForm!:FormGroup;
  checkPackage=false;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router,private ss:SharedService){

  }
 
  ngOnInit(): void {
    this.projectForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      insatallationTime:['',Validators.required],
      installationDate:['',Validators.required],
      noOfCamera:['',Validators.required],
      storageCapacity:['',Validators.required],
      cctvSystemType:['',Validators.required],  
      installationLocation:['',Validators.required],  
      specialRequirement:['',Validators.required]  

    }) 
  }

submitHandler(){
  console.log(this.projectForm)
  let body={
    status:"no Status",
    name:this.projectForm.get('name')?.value,
    email:this.projectForm.get('email')?.value,
    phoneNo:this.projectForm.get('phone')?.value,
    insatallationTime:this.projectForm.get('insatallationTime')?.value,
    installationDate:this.projectForm.get('installationDate')?.value,
    noOfCamera:this.projectForm.get('noOfCamera')?.value,
    cctvSystemType:this.projectForm.get('cctvSystemType')?.value,
    storageCapacity:this.projectForm.get('storageCapacity')?.value,
    installationLocation:this.projectForm.get('installationLocation')?.value,
    specialRequirement:this.projectForm.get('specialRequirement')?.value,
  }


  if(this.projectForm.valid){
    this.http.post('http://localhost:3000/cctvOrder',body).subscribe(res=>{
    if(res){
     
      this.router.navigate(['/req']);
      this.ss.sharedSubject.next({order:'yes'})
    }
    })
  }
  

  
}
get name() {
  return this.projectForm.get('name')!;
}

get phoneNo() {
  return this.projectForm.get('phoneNo')!;
}

get email() {
  return this.projectForm.get('email')!;
}

get eventDate() {
  return this.projectForm.get('eventDate')!;
}
get eventAddress() {
  return this.projectForm.get('eventAddress')!;
}
get eventTime() {
  return this.projectForm.get('eventTime')!;
}
get noOfDays() {
  return this.projectForm.get('noOfDays')!;
}
get storageCapacity() {
  return this.projectForm.get('storageCapacity')!;
}

validate(): void {
  if (this.projectForm?.invalid) {
    for (const control of Object.keys(this.projectForm.controls)) {
      this.projectForm.controls[control].markAsTouched();
    }
    return;
  }
}
}
