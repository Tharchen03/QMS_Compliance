import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { QmsService } from '../qms.service';

@Component({
  selector: 'app-process3',
  templateUrl: './process3.page.html',
  styleUrls: ['./process3.page.scss'],
})
export class Process3Page implements OnInit {
  form:FormGroup;
  form1:FormGroup;
  form2:FormGroup;
  form3:FormGroup;
  form4:FormGroup;





  isModalOpen = false;
  isModalOpen1 = false;
  isModalOpen2 = false;
  isModalOpen3 = false;
  isModalOpen4 = false;



  constructor( private PeopleService:QmsService,
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
      q5 : new FormControl(''),
      q5reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q6: new FormControl(''),
      q6reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),

    });

    this.form3 = new FormGroup({
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

    });

    
    this.form4 = new FormGroup({
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
      q6: new FormControl(''),
      q6reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q7: new FormControl(''),
      q7reason: new FormControl(null,{
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
  setOpen3(isOpen: boolean) {
    this.isModalOpen3 = isOpen;
  }
  setOpen4(isOpen: boolean) {
    this.isModalOpen4 = isOpen;
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
    
    .addpeople31(
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
      // this.form.value.q6,   
      // this.form.value.q6reason,
      // this.form.value.q7,   
      // this.form.value.q7reason,



    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form.reset();
      this.router.navigate(['/process3']);
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
    
    .addpeople32(
      this.form1.value.q1,
      this.form1.value.q1reason,
      this.form1.value.q2,   
      this.form1.value.q2reason,
      this.form1.value.q3,   
      this.form1.value.q3reason,
      this.form1.value.q4,   
      this.form1.value.q4reason,
      // this.form1.value.q5,   
      // this.form1.value.q5reason,
      // this.form1.value.q6,   
      // this.form1.value.q6reason,
      // this.form1.value.q7,   
      // this.form1.value.q7reason,
      // this.form1.value.q8,   
      // this.form1.value.q8reason,
      // this.form1.value.q9,   
      // this.form1.value.q9reason,


    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form1.reset();
      this.router.navigate(['/process3']);
    });

});

  }

  createpeople2(){
    console.log(this.form2.value);
    if (!this.form2.valid){
      return;
    }
    this.loadingCtrl
    .create({
      message:'saving your query...'
    })
    .then(loadingCtrl=>{
      loadingCtrl.present();
      this.PeopleService
    
    .addpeople33(
      this.form2.value.q1,
      this.form2.value.q1reason,
      this.form2.value.q2,   
      this.form2.value.q2reason,
      this.form2.value.q3,   
      this.form2.value.q3reason,
      this.form2.value.q4,   
      this.form2.value.q4reason,
      this.form2.value.q5,   
      this.form2.value.q5reason,
      this.form2.value.q6,   
      this.form2.value.q6reason,
      // this.form1.value.q7,   
      // this.form1.value.q7reason,
      // this.form1.value.q8,   
      // this.form1.value.q8reason,
      // this.form1.value.q9,   
      // this.form1.value.q9reason,


    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form2.reset();
      this.router.navigate(['/process3']);
    });

});

  }


  createpeople3(){
    console.log(this.form3.value);
    if (!this.form3.valid){
      return;
    }
    this.loadingCtrl
    .create({
      message:'saving your query...'
    })
    .then(loadingCtrl=>{
      loadingCtrl.present();
      this.PeopleService
    
    .addpeople34(
      this.form3.value.q1,
      this.form3.value.q1reason,
      this.form3.value.q2,   
      this.form3.value.q2reason,
      this.form3.value.q3,   
      this.form3.value.q3reason,
      this.form3.value.q4,   
      this.form3.value.q4reason,
      this.form3.value.q5,   
      this.form3.value.q5reason,
      // this.form.value.q6,   
      // this.form.value.q6reason,
      // this.form.value.q7,   
      // this.form.value.q7reason,



    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form3.reset();
      this.router.navigate(['/process3']);
    });

});




  }

  createpeople4(){
    console.log(this.form4.value);
    if (!this.form4.valid){
      return;
    }
    this.loadingCtrl
    .create({
      message:'saving your query...'
    })
    .then(loadingCtrl=>{
      loadingCtrl.present();
      this.PeopleService
    
    .addpeople35(
      this.form4.value.q1,
      this.form4.value.q1reason,
      this.form4.value.q2,   
      this.form4.value.q2reason,
      this.form4.value.q3,   
      this.form4.value.q3reason,
      this.form4.value.q4,   
      this.form4.value.q4reason,
      this.form4.value.q5,   
      this.form4.value.q5reason,
      this.form4.value.q6,   
      this.form4.value.q6reason,
      this.form4.value.q7,   
      this.form4.value.q7reason,



    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form4.reset();
      this.router.navigate(['/process3']);
    });

});




  }
}
