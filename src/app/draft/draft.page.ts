import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { QmsService } from '../qms.service';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.page.html',
  styleUrls: ['./draft.page.scss'],
})
export class DraftPage implements OnInit {

  form:FormGroup;

  inputvalue= new FormControl('');
  inputvalue1= new FormControl('');
 


  isModalOpen = false;

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
  }




  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  text(){
    // this. = !this.isLogin;
  }


  createpeople(){
    console.log(this.form.value);
    if (!this.form.valid){
      return;
    }
    this.loadingCtrl
    .create({
      message:'Create registered People...'
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
      this.router.navigate(['/draft']);
    });

});

  }

}

// myform = new FormGroup({
//   username : new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
//   password : new FormControl('',[Validators.required,Validators.minLength(5)]),
//   country : new FormControl('',Validators.required),
//   gender : new FormControl(''),
//   Rember_me :  new FormControl(false)
// });
