import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { QmsService } from '../qms.service';

@Component({
  selector: 'app-process10',
  templateUrl: './process10.page.html',
  styleUrls: ['./process10.page.scss'],
})
export class Process10Page implements OnInit {
  form:FormGroup;
  form1:FormGroup;
  form2:FormGroup;
  form3:FormGroup;
  form4:FormGroup;
  form5:FormGroup;
  form6:FormGroup;


  isModalOpen = false;
  isModalOpen1 = false;
  isModalOpen2 = false;
  isModalOpen3 = false;
  isModalOpen4 = false;
  isModalOpen5 = false;
  isModalOpen6 = false;


  constructor(private PeopleService:QmsService,
    private loadingCtrl:LoadingController,
    private router:Router ) { }

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
});


this.form6 = new FormGroup({
  q1 : new FormControl(''),
  q1reason: new FormControl(null,{
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
    
    .addpeople(
      this.form.value.q1,
      this.form.value.q1reason,
      this.form.value.q2,   
      this.form.value.q2reason,
    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form.reset();
      this.router.navigate(['/process10']);
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
    
    .addpeople1(
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
    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form1.reset();
      this.router.navigate(['/process10']);
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
    
    .addpeople2(
      this.form2.value.q1,
      this.form2.value.q1reason,
      this.form2.value.q2,   
      this.form2.value.q2reason,
      this.form2.value.q3,   
      this.form2.value.q3reason,

    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form2.reset();
      this.router.navigate(['/process10']);
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
    
    .addpeople3(
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
      this.form3.value.q6,   
      this.form3.value.q6reason,
      this.form3.value.q7,   
      this.form3.value.q7reason,

    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form3.reset();
      this.router.navigate(['/process10']);
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
    
    .addpeople4(
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
    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form4.reset();
      this.router.navigate(['/process10']);
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
    
    .addpeople5(
      this.form5.value.q1,
      this.form5.value.q1reason,
      this.form5.value.q2,   
      this.form5.value.q2reason,
      this.form5.value.q3,   
      this.form5.value.q3reason,

    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form5.reset();
      this.router.navigate(['/process10']);
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
    
    .addpeople6(
      this.form6.value.q1,
      this.form6.value.q1reason,
    )
    .subscribe(()=>{
      loadingCtrl.dismiss();
      this.form6.reset();
      this.router.navigate(['/process10']);
    });

});

  }
}


