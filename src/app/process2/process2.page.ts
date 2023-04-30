import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { QmsService } from '../qms.service';

@Component({
  selector: 'app-process2',
  templateUrl: './process2.page.html',
  styleUrls: ['./process2.page.scss'],
})
export class Process2Page implements OnInit {
  form:FormGroup;
  form1:FormGroup;
  form2:FormGroup;
  form3:FormGroup;
  form4:FormGroup;
  form5:FormGroup;
  form6:FormGroup;
  form7:FormGroup;
  form8:FormGroup;
  form9:FormGroup;
  form10:FormGroup;
  form11:FormGroup;
  form12:FormGroup;

  isModalOpen = false;
  isModalOpen1 = false;
  isModalOpen2 = false;
  isModalOpen3 = false;
  isModalOpen4 = false;
  isModalOpen5 = false;
  isModalOpen6 = false;
  isModalOpen7 = false;
  isModalOpen8 = false;
  isModalOpen9 = false;
  isModalOpen10 = false;
  isModalOpen11 = false;
  isModalOpen12 = false;

  constructor(  private PeopleService:QmsService,
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

    });

    this.form5 = new FormGroup({
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
      q8 : new FormControl(''),
      q8reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),

    });

    this.form6 = new FormGroup({
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

    this.form7 = new FormGroup({
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
      q8 : new FormControl(''),
      q8reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q9 : new FormControl(''),
      q9reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),
      q10 : new FormControl(''),
      q10reason: new FormControl(null,{
        updateOn: 'blur',
        
      }),

    });

    
    this.form8 = new FormGroup({
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


    
    this.form9 = new FormGroup({
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

    });


    
    this.form10 = new FormGroup({
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

    this.form11 = new FormGroup({
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


    this.form12 = new FormGroup({
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
  setOpen5(isOpen: boolean) {
    this.isModalOpen5 = isOpen;
  }

  setOpen6(isOpen: boolean) {
    this.isModalOpen6 = isOpen;
  }

  setOpen7(isOpen: boolean) {
    this.isModalOpen7 = isOpen;
  }

  setOpen8(isOpen: boolean) {
    this.isModalOpen8 = isOpen;
  }
  setOpen9(isOpen: boolean) {
    this.isModalOpen9 = isOpen;
  }
  setOpen10(isOpen: boolean) {
    this.isModalOpen10 = isOpen;
  }
  setOpen11(isOpen: boolean) {
    this.isModalOpen11 = isOpen;
  }

  setOpen12(isOpen: boolean) {
    this.isModalOpen12 = isOpen;
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
    
    .addpeople21(
      this.form.value.q1,
      this.form.value.q1reason,
      this.form.value.q2,   
      this.form.value.q2reason,
      // this.form.value.q3,   
      // this.form.value.q3reason,
      // this.form.value.q4,   
      // this.form.value.q4reason,
      // this.form.value.q5,   
      // this.form.value.q5reason,
      // this.form.value.q6,   
      // this.form.value.q6reason,
      // this.form.value.q7,   
      // this.form.value.q7reason,



    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form.reset();
      this.router.navigate(['/process2']);
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
    
    .addpeople22(
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
      this.router.navigate(['/process2']);
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
    
    .addpeople23(
      this.form2.value.q1,
      this.form2.value.q1reason,
      this.form2.value.q2,   
      this.form2.value.q2reason,
      this.form2.value.q3,   
      this.form2.value.q3reason,
      // this.form2.value.q4,   
      // this.form2.value.q4reason,
      // this.form2.value.q5,   
      // this.form2.value.q5reason,
      // this.form2.value.q6,   
      // this.form2.value.q6reason,
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
      this.router.navigate(['/process2']);
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
    
    .addpeople24(
      this.form3.value.q1,
      this.form3.value.q1reason,
      this.form3.value.q2,   
      this.form3.value.q2reason,
      this.form3.value.q3,   
      this.form3.value.q3reason,
      // this.form3.value.q4,   
      // this.form3.value.q4reason,
      // this.form3.value.q5,   
      // this.form3.value.q5reason,
      // this.form.value.q6,   
      // this.form.value.q6reason,
      // this.form.value.q7,   
      // this.form.value.q7reason,



    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form3.reset();
      this.router.navigate(['/process2']);
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
    
    .addpeople25(
      this.form4.value.q1,
      this.form4.value.q1reason,
      this.form4.value.q2,   
      this.form4.value.q2reason,
      this.form4.value.q3,   
      this.form4.value.q3reason,
      this.form4.value.q4,   
      this.form4.value.q4reason,
      // this.form4.value.q5,   
      // this.form4.value.q5reason,
      // this.form4.value.q6,   
      // this.form4.value.q6reason,
      // this.form4.value.q7,   
      // this.form4.value.q7reason,



    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form4.reset();
      this.router.navigate(['/process2']);
    });

});




  }

  createpeople5(){
    console.log(this.form5.value);
    if (!this.form5.valid){
      return;
    }
    this.loadingCtrl
    .create({
      message:'saving your query...'
    })
    .then(loadingCtrl=>{
      loadingCtrl.present();
      this.PeopleService
    
    .addpeople26(
      this.form5.value.q1,
      this.form5.value.q1reason,
      this.form5.value.q2,   
      this.form5.value.q2reason,
      this.form5.value.q3,   
      this.form5.value.q3reason,
      this.form5.value.q4,   
      this.form5.value.q4reason,
      this.form5.value.q5,   
      this.form5.value.q5reason,
      this.form5.value.q6,   
      this.form5.value.q6reason,
      this.form5.value.q7,   
      this.form5.value.q7reason,
      this.form5.value.q8,   
      this.form5.value.q8reason,



    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form5.reset();
      this.router.navigate(['/process2']);
    });

});

  }



  createpeople6(){
    console.log(this.form6.value);
    if (!this.form6.valid){
      return;
    }
    this.loadingCtrl
    .create({
      message:'saving your query...'
    })
    .then(loadingCtrl=>{
      loadingCtrl.present();
      this.PeopleService
    
    .addpeople27(
      this.form6.value.q1,
      this.form6.value.q1reason,
      this.form6.value.q2,   
      this.form6.value.q2reason,
      this.form6.value.q3,   
      this.form6.value.q3reason,
      this.form6.value.q4,   
      this.form6.value.q4reason,
      this.form6.value.q5,   
      this.form6.value.q5reason,
      this.form6.value.q6,   
      this.form6.value.q6reason,
      // this.form5.value.q7,   
      // this.form5.value.q7reason,
      // this.form5.value.q8,   
      // this.form5.value.q8reason,



    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form6.reset();
      this.router.navigate(['/process2']);
    });

});

  }


  createpeople7(){
    console.log(this.form7.value);
    if (!this.form7.valid){
      return;
    }
    this.loadingCtrl
    .create({
      message:'saving your query...'
    })
    .then(loadingCtrl=>{
      loadingCtrl.present();
      this.PeopleService
    
    .addpeople28(
      this.form7.value.q1,
      this.form7.value.q1reason,
      this.form7.value.q2,   
      this.form7.value.q2reason,
      this.form7.value.q3,   
      this.form7.value.q3reason,
      this.form7.value.q4,   
      this.form7.value.q4reason,
      this.form7.value.q5,   
      this.form6.value.q5reason,
      this.form7.value.q6,   
      this.form7.value.q6reason,
      this.form7.value.q7,   
      this.form7.value.q7reason,
      this.form7.value.q8,   
      this.form7.value.q8reason,
      this.form7.value.q9,   
      this.form7.value.q9reason,
      this.form7.value.q10,   
      this.form7.value.q10reason,



    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form7.reset();
      this.router.navigate(['/process2']);
    });

});

  }


  createpeople8(){
    console.log(this.form8.value);
    if (!this.form8.valid){
      return;
    }
    this.loadingCtrl
    .create({
      message:'saving your query...'
    })
    .then(loadingCtrl=>{
      loadingCtrl.present();
      this.PeopleService
    
    .addpeople29(
      this.form8.value.q1,
      this.form8.value.q1reason,
      this.form8.value.q2,   
      this.form8.value.q2reason,
      this.form8.value.q3,   
      this.form8.value.q3reason,
      this.form8.value.q4,   
      this.form8.value.q4reason,
      this.form8.value.q5,   
      this.form8.value.q5reason,
      this.form8.value.q6,   
      this.form8.value.q6reason,
      // this.form8.value.q7,   
      // this.form7.value.q7reason,
      // this.form7.value.q8,   
      // this.form7.value.q8reason,
      // this.form7.value.q9,   
      // this.form7.value.q9reason,
      // this.form7.value.q10,   
      // this.form7.value.q10reason,



    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form8.reset();
      this.router.navigate(['/process2']);
    });

});

  }

  createpeople9(){
    console.log(this.form9.value);
    if (!this.form9.valid){
      return;
    }
    this.loadingCtrl
    .create({
      message:'saving your query...'
    })
    .then(loadingCtrl=>{
      loadingCtrl.present();
      this.PeopleService
    
    .addpeople291(
      this.form9.value.q1,
      this.form9.value.q1reason,
      this.form9.value.q2,   
      this.form9.value.q2reason,
      this.form9.value.q3,   
      this.form9.value.q3reason,
      // this.form2.value.q4,   
      // this.form2.value.q4reason,
      // this.form2.value.q5,   
      // this.form2.value.q5reason,
      // this.form2.value.q6,   
      // this.form2.value.q6reason,
      // this.form1.value.q7,   
      // this.form1.value.q7reason,
      // this.form1.value.q8,   
      // this.form1.value.q8reason,
      // this.form1.value.q9,   
      // this.form1.value.q9reason,


    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form9.reset();
      this.router.navigate(['/process2']);
    });

});

  }


  createpeople10(){
    console.log(this.form10.value);
    if (!this.form10.valid){
      return;
    }
    this.loadingCtrl
    .create({
      message:'saving your query...'
    })
    .then(loadingCtrl=>{
      loadingCtrl.present();
      this.PeopleService
    
    .addpeople292(
      this.form10.value.q1,
      this.form10.value.q1reason,
      this.form10.value.q2,   
      this.form10.value.q2reason,
      this.form10.value.q3,   
      this.form10.value.q3reason,
      this.form10.value.q4,   
      this.form10.value.q4reason,
      this.form10.value.q5,   
      this.form10.value.q5reason,
      this.form10.value.q6,   
      this.form10.value.q6reason,
      // this.form1.value.q7,   
      // this.form1.value.q7reason,
      // this.form1.value.q8,   
      // this.form1.value.q8reason,
      // this.form1.value.q9,   
      // this.form1.value.q9reason,


    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form10.reset();
      this.router.navigate(['/process2']);
    });

});

  }

  createpeople11(){
    console.log(this.form11.value);
    if (!this.form11.valid){
      return;
    }
    this.loadingCtrl
    .create({
      message:'saving your query...'
    })
    .then(loadingCtrl=>{
      loadingCtrl.present();
      this.PeopleService
    
    .addpeople293(
      this.form11.value.q1,
      this.form11.value.q1reason,
      this.form11.value.q2,   
      this.form11.value.q2reason,
      this.form11.value.q3,   
      this.form11.value.q3reason,
      this.form11.value.q4,   
      this.form11.value.q4reason,
      // this.form10.value.q5,   
      // this.form10.value.q5reason,
      // this.form10.value.q6,   
      // this.form10.value.q6reason,
      // this.form1.value.q7,   
      // this.form1.value.q7reason,
      // this.form1.value.q8,   
      // this.form1.value.q8reason,
      // this.form1.value.q9,   
      // this.form1.value.q9reason,


    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form11.reset();
      this.router.navigate(['/process2']);
    });

});

  }


  createpeople12(){
    console.log(this.form12.value);
    if (!this.form12.valid){
      return;
    }
    this.loadingCtrl
    .create({
      message:'saving your query...'
    })
    .then(loadingCtrl=>{
      loadingCtrl.present();
      this.PeopleService
    
    .addpeople294(
      this.form12.value.q1,
      this.form12.value.q1reason,
      this.form12.value.q2,   
      this.form12.value.q2reason,
      this.form12.value.q3,   
      this.form12.value.q3reason,
      this.form12.value.q4,   
      this.form12.value.q4reason,
      this.form12.value.q5,   
      this.form12.value.q5reason,
      this.form12.value.q6,   
      this.form12.value.q6reason,
      this.form12.value.q7,   
      this.form12.value.q7reason,
      // this.form1.value.q8,   
      // this.form1.value.q8reason,
      // this.form1.value.q9,   
      // this.form1.value.q9reason,


    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form12.reset();
      this.router.navigate(['/process2']);
    });

});

  }
}
