import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { QmsService } from '../qms.service';

@Component({
  selector: 'app-process8',
  templateUrl: './process8.page.html',
  styleUrls: ['./process8.page.scss'],
})
export class Process8Page implements OnInit {
  
  form:FormGroup;
  form1:FormGroup;
  form2:FormGroup;

  isModalOpen = false;
  isModalOpen1 = false;

  isModalOpen2 = false;

  constructor(private PeopleService:QmsService,
    private loadingCtrl:LoadingController,
    private router:Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      q1 : new FormControl(''),
      q1reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q2 : new FormControl(''),
      q2reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q3 : new FormControl(''),
      q3reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q4 : new FormControl(''),
      q4reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q5 : new FormControl(''),
      q5reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q6 : new FormControl(''),
      q6reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q7 : new FormControl(''),
      q7reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
    });


    this.form1 = new FormGroup({
      q1 : new FormControl(''),
      q1reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q2 : new FormControl(''),
      q2reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q3 : new FormControl(''),
      q3reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q4 : new FormControl(''),
      q4reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q5 : new FormControl(''),
      q5reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q6 : new FormControl(''),
      q6reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
    });

    this.form2 = new FormGroup({
      q1 : new FormControl(''),
      q1reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q2 : new FormControl(''),
      q2reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q3 : new FormControl(''),
      q3reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q4 : new FormControl(''),
      q4reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),

    });
  }

  
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpen1(isOpen: boolean) {
    this.isModalOpen1 = isOpen;
  }

  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
  }



  
  createpeople(){
    console.log(this.form.value);
    if (!this.form.valid){
      return;
    }
    this.loadingCtrl
    .create({
      message:'saving your query...'
    })
    .then(loadingCtrl=>{
      loadingCtrl.present();
      this.PeopleService
    
    .addpeople81(
      this.form.value.q1,
      this.form.value.q1reason,
      this.form.value.q2,   
      this.form.value.q2reason,
      this.form.value.q3,   
      this.form.value.q3reason,
      this.form.value.q4,   
      this.form.value.q4reason,
      this.form.value.q5,   
      this.form.value.q5reason,
      this.form.value.q6,   
      this.form.value.q6reason,
      this.form.value.q7,   
      this.form.value.q7reason,


    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form.reset();
      this.router.navigate(['/process8']);
    });

});

  }



    
  createpeople1(){
    console.log(this.form1.value);
    if (!this.form1.valid){
      return;
    }
    this.loadingCtrl
    .create({
      message:'saving your query...'
    })
    .then(loadingCtrl=>{
      loadingCtrl.present();
      this.PeopleService
    
    .addpeople82(
      this.form1.value.q1,
      this.form1.value.q1reason,
      this.form1.value.q2,   
      this.form1.value.q2reason,
      this.form1.value.q3,   
      this.form1.value.q3reason,
      this.form1.value.q4,   
      this.form1.value.q4reason,
      this.form1.value.q5,   
      this.form1.value.q5reason,
      this.form1.value.q6,   
      this.form1.value.q6reason,
      // this.form.value.q7,   
      // this.form.value.q7reason,


    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form1.reset();
      this.router.navigate(['/process8']);
    });

});

  }

  createpeople2(){
    console.log(this.form2.value);
    if (!this.form1.valid){
      return;
    }
    this.loadingCtrl
    .create({
      message:'saving your query...'
    })
    .then(loadingCtrl=>{
      loadingCtrl.present();
      this.PeopleService
    
    .addpeople83(
      this.form2.value.q1,
      this.form2.value.q1reason,
      this.form2.value.q2,   
      this.form2.value.q2reason,
      this.form2.value.q3,   
      this.form2.value.q3reason,
      this.form2.value.q4,   
      this.form2.value.q4reason,
      // this.form1.value.q5,   
      // this.form1.value.q5reason,
      // this.form1.value.q6,   
      // this.form1.value.q6reason,
      // this.form.value.q7,   
      // this.form.value.q7reason,


    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form2.reset();
      this.router.navigate(['/process8']);
    });

});

  }


}
