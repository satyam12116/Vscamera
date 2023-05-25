import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  flag=false;

  checkSuccess='';
  constructor(private ss:SharedService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ss.sharedSubject.subscribe(res=>{
      console.log(res)
     if(res){
      this.flag=true;
      this.checkSuccess=res.state;
 
      setTimeout(()=>{
        this.flag=false;
      },3000)
     }
    })
    
  }
  
  }
