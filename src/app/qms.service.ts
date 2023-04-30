import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { Process01_QAP_1_1_1, Process01_QAP_1_2_1, Process01_QAP_1_2_2, Process01_QAP_1_2_3, Process01_QAP_1_2_4, Process01_QAP_1_3_1, Process01_QAP_1_3_2, Process01_QAP_1_4_1, Process01_QAP_1_4_2, Process01_QAP_1_4_3 } from './process1/process1.model';
import { Process10_QAP_10_1_1, Process10_QAP_10_1_2, Process10_QAP_10_1_3, Process10_QAP_10_1_4, Process10_QAP_10_1_5, Process10_QAP_10_2_1, Process10_QAP_10_2_2 } from './process10/process10.model';
import { Process02_QAP_2_1_1, Process02_QAP_2_1_2, Process02_QAP_2_2_1, Process02_QAP_2_2_2, Process02_QAP_2_2_3, Process02_QAP_2_2_4, Process02_QAP_2_3_1, Process02_QAP_2_3_2, Process02_QAP_2_4_1, Process02_QAP_2_5_1, Process02_QAP_2_5_2, Process02_QAP_2_5_3, Process02_QAP_2_5_4,  } from './process2/process2.model';
import { Process03_QAP_3_1_1, Process03_QAP_3_1_2, Process03_QAP_3_2_1, Process03_QAP_3_3_1, Process03_QAP_3_4_1 } from './process3/process3.model';
import { Process04_QAP_4_1_1, Process04_QAP_4_1_2 } from './process4/process4.model';
import { Process05_QAP_5_1_1, Process05_QAP_5_1_2, Process05_QAP_5_2_1 } from './process5/process5.model';
import { Process06_QAP_6_1_1, Process06_QAP_6_1_2 } from './process6/process6.model';
import { Process07_QAP_7_1_1, Process07_QAP_7_1_2 } from './process7/process7.model';
import { Process08_QAP_8_1_1, Process08_QAP_8_1_2, Process08_QAP_8_2_1 } from './process8/process8.model';
import { Process09_QAP_9_1_1, Process09_QAP_9_1_2, Process09_QAP_9_1_3 } from './process9/process9.model';

@Injectable({
  providedIn: 'root'
})

export class QmsService {
  private _peoples = new BehaviorSubject<Process10_QAP_10_1_1[]>([])
  allpeople: Process10_QAP_10_1_1[];
  get peoples(){
  return this._peoples.asObservable();
  peopleId: String;
}

  private _peoples1 = new BehaviorSubject<Process10_QAP_10_1_2[]>([])
  allpeople1: Process10_QAP_10_1_2[];
  get peoples1(){
  return this._peoples1.asObservable();
  peopleId: String;
}

private _peoples2 = new BehaviorSubject<Process10_QAP_10_1_3[]>([])
allpeople2: Process10_QAP_10_1_3[];
get peoples2(){
return this._peoples2.asObservable();
peopleId: String;
}

private _peoples3 = new BehaviorSubject<Process10_QAP_10_1_4[]>([])
allpeople3: Process10_QAP_10_1_4[];
get peoples3(){
return this._peoples3.asObservable();
peopleId: String;
}

private _peoples4 = new BehaviorSubject<Process10_QAP_10_1_5[]>([])
allpeople4: Process10_QAP_10_1_5[];
get peoples4(){
return this._peoples4.asObservable();
peopleId: String;
}

private _peoples5 = new BehaviorSubject<Process10_QAP_10_2_1[]>([])
allpeople5: Process10_QAP_10_2_1[];
get peoples5(){
return this._peoples5.asObservable();
peopleId: String;
}

private _peoples6 = new BehaviorSubject<Process10_QAP_10_2_2[]>([])
allpeople6: Process10_QAP_10_2_2[];
get peoples6(){
return this._peoples6.asObservable();
peopleId: String;
}

private _peoples7 = new BehaviorSubject<Process09_QAP_9_1_1[]>([])
allpeople7: Process09_QAP_9_1_1[];
get peoples7(){
return this._peoples7.asObservable();
peopleId: String;
}

private _peoples8 = new BehaviorSubject<Process09_QAP_9_1_2[]>([])
allpeople8: Process09_QAP_9_1_2[];
get peoples8(){
return this._peoples8.asObservable();
peopleId: String;
}

private _peoples9 = new BehaviorSubject<Process09_QAP_9_1_3[]>([])
allpeople9: Process09_QAP_9_1_3[];
get peoples9(){
return this._peoples9.asObservable();
peopleId: String;
}

private _peoples10 = new BehaviorSubject<Process08_QAP_8_1_1[]>([])
allpeople10: Process08_QAP_8_1_1[];
get peoples10(){
return this._peoples10.asObservable();
peopleId: String;
}


private _peoples11 = new BehaviorSubject<Process08_QAP_8_1_2[]>([])
allpeople11: Process08_QAP_8_1_2[];
get peoples11(){
return this._peoples11.asObservable();
peopleId: String;
}

private _peoples12 = new BehaviorSubject<Process08_QAP_8_2_1[]>([])
allpeople12: Process08_QAP_8_2_1[];
get peoples12(){
return this._peoples12.asObservable();
peopleId: String;
}

private _peoples13 = new BehaviorSubject<Process07_QAP_7_1_1[]>([])
allpeople13: Process07_QAP_7_1_1[];
get peoples13(){
return this._peoples13.asObservable();
peopleId: String;
}

private _peoples14 = new BehaviorSubject<Process07_QAP_7_1_2[]>([])
allpeople14: Process07_QAP_7_1_2[];
get peoples14(){
return this._peoples14.asObservable();
peopleId: String;
}

private _peoples15 = new BehaviorSubject<Process06_QAP_6_1_1[]>([])
allpeople15: Process06_QAP_6_1_1[];
get peoples15(){
return this._peoples15.asObservable();
peopleId: String;
}


private _peoples16 = new BehaviorSubject<Process06_QAP_6_1_2[]>([])
allpeople16: Process06_QAP_6_1_2[];
get peoples16(){
return this._peoples16.asObservable();
peopleId: String;
}

private _peoples17 = new BehaviorSubject<Process05_QAP_5_1_1[]>([])
allpeople17: Process05_QAP_5_1_1[];
get peoples17(){
return this._peoples17.asObservable();
peopleId: String;
}

private _peoples18 = new BehaviorSubject<Process05_QAP_5_1_2[]>([])
allpeople18: Process05_QAP_5_1_2[];
get peoples18(){
return this._peoples18.asObservable();
peopleId: String;
}


private _peoples19 = new BehaviorSubject<Process05_QAP_5_2_1[]>([])
allpeople19: Process05_QAP_5_2_1[];
get peoples19(){
return this._peoples19.asObservable();
peopleId: String;
}

private _peoples20 = new BehaviorSubject<Process04_QAP_4_1_1[]>([])
allpeople20: Process04_QAP_4_1_1[];
get peoples20(){
return this._peoples20.asObservable();
peopleId: String;
}


private _peoples21 = new BehaviorSubject<Process04_QAP_4_1_2[]>([])
allpeople21: Process04_QAP_4_1_2[];
get peoples21(){
return this._peoples21.asObservable();
peopleId: String;
}

private _peoples22 = new BehaviorSubject<Process03_QAP_3_1_1[]>([])
allpeople22: Process03_QAP_3_1_1[];
get peoples22(){
return this._peoples22.asObservable();
peopleId: String;
}

private _peoples23 = new BehaviorSubject<Process03_QAP_3_1_2[]>([])
allpeople23: Process03_QAP_3_1_2[];
get peoples23(){
return this._peoples23.asObservable();
peopleId: String;
}


private _peoples24 = new BehaviorSubject<Process03_QAP_3_2_1[]>([])
allpeople24: Process03_QAP_3_2_1[];
get peoples24(){
return this._peoples24.asObservable();
peopleId: String;
}


private _peoples25 = new BehaviorSubject<Process03_QAP_3_3_1[]>([])
allpeople25: Process03_QAP_3_3_1[];
get peoples25(){
return this._peoples25.asObservable();
peopleId: String;
}

private _peoples26 = new BehaviorSubject<Process03_QAP_3_4_1[]>([])
allpeople26: Process03_QAP_3_4_1[];
get peoples26(){
return this._peoples26.asObservable();
peopleId: String;
}


private _peoples27 = new BehaviorSubject<Process02_QAP_2_1_1[]>([])
allpeople27: Process02_QAP_2_1_1[];
get peoples27(){
return this._peoples27.asObservable();
peopleId: String;
}
private _peoples28 = new BehaviorSubject<Process02_QAP_2_1_2[]>([])
allpeople28: Process02_QAP_2_1_2[];
get peoples28(){
return this._peoples28.asObservable();
peopleId: String;
}


private _peoples29 = new BehaviorSubject<Process02_QAP_2_2_1[]>([])
allpeople29: Process02_QAP_2_2_1[];
get peoples29(){
return this._peoples29.asObservable();
peopleId: String;
}

private _peoples30 = new BehaviorSubject<Process02_QAP_2_2_2[]>([])
allpeople30: Process02_QAP_2_2_2[];
get peoples30(){
return this._peoples30.asObservable();
peopleId: String;
}

private _peoples31 = new BehaviorSubject<Process02_QAP_2_2_3[]>([])
allpeople31: Process02_QAP_2_2_3[];
get peoples31(){
return this._peoples31.asObservable();
peopleId: String;
}

private _peoples32 = new BehaviorSubject<Process02_QAP_2_2_4[]>([])
allpeople32: Process02_QAP_2_2_4[];
get peoples32(){
return this._peoples32.asObservable();
peopleId: String;
}

private _peoples33 = new BehaviorSubject<Process02_QAP_2_3_1[]>([])
allpeople33: Process02_QAP_2_3_1[];
get peoples33(){
return this._peoples33.asObservable();
peopleId: String;
}

private _peoples34 = new BehaviorSubject<Process02_QAP_2_3_2[]>([])
allpeople34: Process02_QAP_2_3_2[];
get peoples34(){
return this._peoples34.asObservable();
peopleId: String;
}

private _peoples35 = new BehaviorSubject<Process02_QAP_2_4_1[]>([])
allpeople35: Process02_QAP_2_4_1[];
get peoples35(){
return this._peoples35.asObservable();
peopleId: String;
}

private _peoples36 = new BehaviorSubject<Process02_QAP_2_5_1[]>([])
allpeople36: Process02_QAP_2_5_1[];
get peoples36(){
return this._peoples36.asObservable();
peopleId: String;
}

private _peoples37 = new BehaviorSubject<Process02_QAP_2_5_2[]>([])
allpeople37: Process02_QAP_2_5_2[];
get peoples37(){
return this._peoples37.asObservable();
peopleId: String;
}

private _peoples38 = new BehaviorSubject<Process02_QAP_2_5_3[]>([])
allpeople38: Process02_QAP_2_5_3[];
get peoples38(){
return this._peoples38.asObservable();
peopleId: String;
}

private _peoples39 = new BehaviorSubject<Process02_QAP_2_5_4[]>([])
allpeople39: Process02_QAP_2_5_4[];
get peoples39(){
return this._peoples39.asObservable();
peopleId: String;
}

private _peoples40 = new BehaviorSubject<Process01_QAP_1_1_1[]>([])
allpeople40: Process01_QAP_1_1_1[];
get peoples40(){
return this._peoples40.asObservable();
peopleId: String;
}
private _peoples41 = new BehaviorSubject<Process01_QAP_1_2_1[]>([])
allpeople41: Process01_QAP_1_2_1[];
get peoples41(){
return this._peoples41.asObservable();
peopleId: String;
}

private _peoples42 = new BehaviorSubject<Process01_QAP_1_2_2[]>([])
allpeople42: Process01_QAP_1_2_2[];
get peoples42(){
return this._peoples42.asObservable();
peopleId: String;
}

private _peoples43 = new BehaviorSubject<Process01_QAP_1_2_3[]>([])
allpeople43: Process01_QAP_1_2_3[];
get peoples43(){
return this._peoples43.asObservable();
peopleId: String;
}


private _peoples44 = new BehaviorSubject<Process01_QAP_1_2_4[]>([])
allpeople44: Process01_QAP_1_2_4[];
get peoples44(){
return this._peoples44.asObservable();
peopleId: String;
}

private _peoples45 = new BehaviorSubject<Process01_QAP_1_3_1[]>([])
allpeople45: Process01_QAP_1_3_1[];
get peoples45(){
return this._peoples45.asObservable();
peopleId: String;
}


private _peoples46 = new BehaviorSubject<Process01_QAP_1_3_2[]>([])
allpeople46: Process01_QAP_1_3_2[];
get peoples46(){
return this._peoples46.asObservable();
peopleId: String;
}


private _peoples47 = new BehaviorSubject<Process01_QAP_1_4_1[]>([])
allpeople47: Process01_QAP_1_4_1[];
get peoples47(){
return this._peoples47.asObservable();
peopleId: String;
}


private _peoples48 = new BehaviorSubject<Process01_QAP_1_4_2[]>([])
allpeople48: Process01_QAP_1_4_2[];
get peoples48(){
return this._peoples48.asObservable();
peopleId: String;
}

private _peoples49 = new BehaviorSubject<Process01_QAP_1_4_3[]>([])
allpeople49: Process01_QAP_1_4_3[];
get peoples49(){
return this._peoples49.asObservable();
peopleId: String;
}
  constructor(
    private http:HttpClient,
  ) { }

  addpeople(
     q1:string,
     q1reason:string,  
     q2:string,
     q2reason:string,
  ){
    console.log(q1,q2,q1reason,q2reason );

    let generatedId: string;
    const newPeople = new Process10_QAP_10_1_1(
      Math.random().toString(),
      q1,
      q1reason,
      q2,
      q2reason,
      'abc'
      
    );
    return this.http
    .post<{Name: string}>
    ("https://qmsogt-default-rtdb.firebaseio.com/Process10_QAP_10_1_1-QMS.json",  // .jons only present in firebase.
  {
    ...newPeople,
    id: null
  })
    .pipe(
      switchMap(resData =>{
        generatedId = resData.Name;
        return this.peoples;
      }),
      take(1),
      tap(people =>{
        newPeople.id = generatedId;
        this._peoples.next(people.concat(newPeople))
      })
    )
  }


  addpeople1(
    q1:string,
    q1reason:string,  
    q2:string,
    q2reason:string,
    q3:string,
    q3reason:string,
    q4:string,
    q4reason:string,
    q5:string,
    q5reason:string,
 ){
   console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason );

   let generatedId: string;
   const newPeople = new Process10_QAP_10_1_2(
     Math.random().toString(),
     q1,
     q1reason,
     q2,
     q2reason,
     q3,
     q3reason,
     q4,
     q4reason,
     q5,
     q5reason,
     'abc'
     
   );
   return this.http
   .post<{Name: string}>
   ("https://qmsogt-default-rtdb.firebaseio.com/Process10_QAP_10_1_2-QMS.json",  // .jons only present in firebase.
 {
   ...newPeople,
   id: null
 })
   .pipe(
     switchMap(resData =>{
       generatedId = resData.Name;
       return this.peoples1;
     }),
     take(1),
     tap(people =>{
       newPeople.id = generatedId;
       this._peoples1.next(people.concat(newPeople))
     })
   )
 }


 addpeople2(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason);

 let generatedId: string;
 const newPeople = new Process10_QAP_10_1_3(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process10_QAP_10_1_3-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples2;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples2.next(people.concat(newPeople))
   })
 )
}



 addpeople3(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason);

 let generatedId: string;
 const newPeople = new Process10_QAP_10_1_4(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,


   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process10_QAP_10_1_4-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples3;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples3.next(people.concat(newPeople))
   })
 )
}

addpeople4(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,


){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason);

 let generatedId: string;
 const newPeople = new Process10_QAP_10_1_5(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process10_QAP_10_1_5-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples4;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples4.next(people.concat(newPeople))
   })
 )
}

addpeople5(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,



){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,);

 let generatedId: string;
 const newPeople = new Process10_QAP_10_2_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process10_QAP_10_2_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples5;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples5.next(people.concat(newPeople))
   })
 )
}


addpeople6(
  q1:string,
  q1reason:string,  
){
 console.log(q1,q1reason,);

 let generatedId: string;
 const newPeople = new Process10_QAP_10_2_2(
   Math.random().toString(),
   q1,
   q1reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process10_QAP_10_2_2-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples6;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples6.next(people.concat(newPeople))
   })
 )
}


addpeople91(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,
   q8:string,
   q8reason:string,
   q9:string,
   q9reason:string,

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,q8,q8reason,q9,q9reason);

 let generatedId: string;
 const newPeople = new Process09_QAP_9_1_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   q8,
   q8reason,
   q9,
   q9reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process09_QAP_9_1_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples7;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples7.next(people.concat(newPeople))
   })
 )
}



addpeople92(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,
   q8:string,
   q8reason:string,
 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,q8,q8reason);

 let generatedId: string;
 const newPeople = new Process09_QAP_9_1_2(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   q8,
   q8reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process09_QAP_9_1_2-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples8;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples8.next(people.concat(newPeople))
   })
 )
}




addpeople93(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,

 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,);

 let generatedId: string;
 const newPeople = new Process09_QAP_9_1_3(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process09_QAP_9_1_3-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples9;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples9.next(people.concat(newPeople))
   })
 )
}

addpeople81(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,

 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,);

 let generatedId: string;
 const newPeople = new Process08_QAP_8_1_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process08_QAP_8_1_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples10;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples10.next(people.concat(newPeople))
   })
 )


}


addpeople82(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,);

 let generatedId: string;
 const newPeople = new Process08_QAP_8_1_2(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process08_QAP_8_1_2-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples11;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples11.next(people.concat(newPeople))
   })
 )
}


addpeople83(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,


){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,);

 let generatedId: string;
 const newPeople = new Process08_QAP_8_2_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process08_QAP_8_2_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples12;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples12.next(people.concat(newPeople))
   })
 )
}


addpeople71(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,
   q8:string,
   q8reason:string,
   q9:string,
   q9reason:string,
   q10:string,
   q10reason:string,
   q11:string,
   q11reason:string,

 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,q8,q8reason,q9,q9reason,q10,q10reason,q11,q11reason);

 let generatedId: string;
 const newPeople = new Process07_QAP_7_1_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   q8,
   q8reason,
   q9,
   q9reason,
   q10,
   q10reason,
   q11,
   q11reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process07_QAP_7_1_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples13;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples13.next(people.concat(newPeople))
   })
 )


}


addpeople72(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,
   q8:string,
   q8reason:string,
   q9:string,
   q9reason:string,
 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,q8,q8reason,q9,q9reason);

 let generatedId: string;
 const newPeople = new Process07_QAP_7_1_2(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   q8,
   q8reason,
   q9,
   q9reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process07_QAP_7_1_2-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples14;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples14.next(people.concat(newPeople))
   })
 )


}



addpeople61(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,

 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,);

 let generatedId: string;
 const newPeople = new Process06_QAP_6_1_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process06_QAP_6_1_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples15;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples15.next(people.concat(newPeople))
   })
 )


}



addpeople62(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,
   q8:string,
   q8reason:string,
   q9:string,
   q9reason:string,
 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,q8,q8reason,q9,q9reason);

 let generatedId: string;
 const newPeople = new Process06_QAP_6_1_2(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   q8,
   q8reason,
   q9,
   q9reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process06_QAP_6_1_2-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples16;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples16.next(people.concat(newPeople))
   })
 )


}


addpeople51(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,

 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason );

 let generatedId: string;
 const newPeople = new Process05_QAP_5_1_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,

   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process05_QAP_5_1_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples17;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples17.next(people.concat(newPeople))
   })
 )


}


addpeople52(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,


 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason);

 let generatedId: string;
 const newPeople = new Process05_QAP_5_1_2(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process05_QAP_5_1_2-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples18;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples18.next(people.concat(newPeople))
   })
 )


}


addpeople53(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,



 

){
 console.log(q1,q2,q1reason,q2reason,);

 let generatedId: string;
 const newPeople = new Process05_QAP_5_2_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process05_QAP_5_2_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples19;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples19.next(people.concat(newPeople))
   })
 )


}




addpeople41(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,
   q8:string,
   q8reason:string,
   q9:string,
   q9reason:string,
 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,q8,q8reason,q9,q9reason);

 let generatedId: string;
 const newPeople = new Process04_QAP_4_1_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   q8,
   q8reason,
   q9,
   q9reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process04_QAP_4_1_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples20;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples20.next(people.concat(newPeople))
   })
 )


}


addpeople42(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,

 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,);

 let generatedId: string;
 const newPeople = new Process04_QAP_4_1_2(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process04_QAP_4_1_2-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples21;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples21.next(people.concat(newPeople))
   })
 )


}



addpeople31(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,


 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason );

 let generatedId: string;
 const newPeople = new Process03_QAP_3_1_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process03_QAP_3_1_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples22;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples22.next(people.concat(newPeople))
   })
 )


}

addpeople32(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,



 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,);

 let generatedId: string;
 const newPeople = new Process03_QAP_3_1_2(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process03_QAP_3_1_2-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples23;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples23.next(people.concat(newPeople))
   })
 )


}


addpeople33(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,


 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,);

 let generatedId: string;
 const newPeople = new Process03_QAP_3_2_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process03_QAP_3_2_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples24;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples24.next(people.concat(newPeople))
   })
 )


}



addpeople34(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,



 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason );

 let generatedId: string;
 const newPeople = new Process03_QAP_3_3_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process03_QAP_3_3_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples25;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples25.next(people.concat(newPeople))
   })
 )


}

addpeople35(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,

 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,);

 let generatedId: string;
 const newPeople = new Process03_QAP_3_4_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process03_QAP_3_4_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples26;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples26.next(people.concat(newPeople))
   })
 )


}

addpeople21(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
){
 console.log(q1,q2,q1reason,q2reason );

 let generatedId: string;
 const newPeople = new Process02_QAP_2_1_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process02_QAP_2_1_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples27;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples27.next(people.concat(newPeople))
   })
 )


}

addpeople22(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
  q4:string,
  q4reason:string,
  q5:string,
  q5reason:string,
){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason );

 let generatedId: string;
 const newPeople = new Process02_QAP_2_1_2(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process02_QAP_2_1_2-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples28;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples28.next(people.concat(newPeople))
   })
 )
}



addpeople23(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason, );

 let generatedId: string;
 const newPeople = new Process02_QAP_2_2_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process02_QAP_2_2_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples29;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples29.next(people.concat(newPeople))
   })
 )
}

addpeople24(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason, );

 let generatedId: string;
 const newPeople = new Process02_QAP_2_2_2(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process02_QAP_2_2_2-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples30;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples30.next(people.concat(newPeople))
   })
 )
}


addpeople25(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
  q4:string,
  q4reason:string,

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason );

 let generatedId: string;
 const newPeople = new Process02_QAP_2_2_3(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process02_QAP_2_2_3-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples31;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples31.next(people.concat(newPeople))
   })
 )
}



addpeople26(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,
   q8:string,
   q8reason:string,

 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,q8,q8reason);

 let generatedId: string;
 const newPeople = new Process02_QAP_2_2_4(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   q8,
   q8reason,

   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process02_QAP_2_2_4-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples32;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples32.next(people.concat(newPeople))
   })
 )


}


addpeople27(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,


 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason);

 let generatedId: string;
 const newPeople = new Process02_QAP_2_3_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process02_QAP_2_3_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples33;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples33.next(people.concat(newPeople))
   })
 )


}


addpeople28(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,
   q8:string,
   q8reason:string,
   q9:string,
   q9reason:string,
   q10:string,
   q10reason:string,


 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,q8,q8reason,q9,q9reason,q10,q10reason,);

 let generatedId: string;
 const newPeople = new Process02_QAP_2_3_2(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   q8,
   q8reason,
   q9,
   q9reason,
   q10,
   q10reason,

   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process02_QAP_2_3_2-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples34;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples34.next(people.concat(newPeople))
   })
 )


}




addpeople29(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,



 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,);

 let generatedId: string;
 const newPeople = new Process02_QAP_2_4_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process02_QAP_2_4_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples35;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples35.next(people.concat(newPeople))
   })
 )


}

addpeople291(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,




 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason);

 let generatedId: string;
 const newPeople = new Process02_QAP_2_5_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process02_QAP_2_5_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples36;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples36.next(people.concat(newPeople))
   })
 )


}

addpeople292(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,



 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,);

 let generatedId: string;
 const newPeople = new Process02_QAP_2_5_2(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process02_QAP_2_5_2-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples37;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples37.next(people.concat(newPeople))
   })
 )


}

addpeople293(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,




 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,);

 let generatedId: string;
 const newPeople = new Process02_QAP_2_5_3(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process02_QAP_2_5_3-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples38;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples38.next(people.concat(newPeople))
   })
 )


}

addpeople294(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,



 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,);

 let generatedId: string;
 const newPeople = new Process02_QAP_2_5_4(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process02_QAP_2_5_4-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples39;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples39.next(people.concat(newPeople))
   })
 )


}

addpeople11(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,
   q8:string,
   q8reason:string,
   q9:string,
   q9reason:string,
   q10:string,
   q10reason:string,
   q11:string,
   q11reason:string,
   q12:string,
   q12reason:string,


 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,q8,q8reason,q9,q9reason,q10,q10reason,  q11, q11reason, q12,q12reason,);

 let generatedId: string;
 const newPeople = new Process01_QAP_1_1_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   q8,
   q8reason,
   q9,
   q9reason,
   q10,
   q10reason,
   q11,
   q11reason,
   q12,
   q12reason,

   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process01_QAP_1_1_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples40;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples40.next(people.concat(newPeople))
   })
 )


}


addpeople12(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,
   q8:string,
   q8reason:string,
   q9:string,
   q9reason:string,
   q10:string,
   q10reason:string,
   q11:string,
   q11reason:string,
   q12:string,
   q12reason:string,
   q13:string,
   q13reason:string,
   q14:string,
   q14reason:string,


 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,q8,q8reason,q9,q9reason,q10,q10reason,  q11, q11reason, q12,q12reason,);

 let generatedId: string;
 const newPeople = new Process01_QAP_1_2_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   q8,
   q8reason,
   q9,
   q9reason,
   q10,
   q10reason,
   q11,
   q11reason,
   q12,
   q12reason,
   q13,
   q13reason,
   q14,
   q14reason,

   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process01_QAP_1_2_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples41;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples41.next(people.concat(newPeople))
   })
 )


}

addpeople13(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,

 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason );

 let generatedId: string;
 const newPeople = new Process01_QAP_1_2_2(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,

   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process01_QAP_1_2_2-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples42;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples42.next(people.concat(newPeople))
   })
 )


}


addpeople14(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,
   q8:string,
   q8reason:string,



 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,q8,q8reason,);

 let generatedId: string;
 const newPeople = new Process01_QAP_1_2_3(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   q8,
   q8reason,


   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process01_QAP_1_2_3-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples43;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples43.next(people.concat(newPeople))
   })
 )


}



addpeople15(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,




 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,);

 let generatedId: string;
 const newPeople = new Process01_QAP_1_2_4(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,



   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process01_QAP_1_2_4-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples44;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples44.next(people.concat(newPeople))
   })
 )


}

addpeople16(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,

 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,);

 let generatedId: string;
 const newPeople = new Process01_QAP_1_3_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process01_QAP_1_3_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples45;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples45.next(people.concat(newPeople))
   })
 )


}


addpeople17(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
   q4:string,
   q4reason:string,
   q5:string,
   q5reason:string,
   q6:string,
   q6reason:string,
   q7:string,
   q7reason:string,
   q8:string,
   q8reason:string,

 

){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,q4,q4reason,q5,q5reason ,q6,q6reason,q7,q7reason,  q8,q8reason,);

 let generatedId: string;
 const newPeople = new Process01_QAP_1_3_2(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   q5,
   q5reason,
   q6,
   q6reason,
   q7,
   q7reason,
   q8,
   q8reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process01_QAP_1_3_2-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples46;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples46.next(people.concat(newPeople))
   })
 )


}

addpeople18(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,


){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,);

 let generatedId: string;
 const newPeople = new Process01_QAP_1_4_1(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process01_QAP_1_4_1-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples47;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples47.next(people.concat(newPeople))
   })
 )


}

addpeople19(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,


){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,);

 let generatedId: string;
 const newPeople = new Process01_QAP_1_4_2(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process01_QAP_1_4_2-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples48;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples48.next(people.concat(newPeople))
   })
 )


}

addpeople191(
  q1:string,
  q1reason:string,  
  q2:string,
  q2reason:string,
  q3:string,
  q3reason:string,
  q4:string,
  q4reason:string,


){
 console.log(q1,q2,q1reason,q2reason,q3,q3reason,);

 let generatedId: string;
 const newPeople = new Process01_QAP_1_4_3(
   Math.random().toString(),
   q1,
   q1reason,
   q2,
   q2reason,
   q3,
   q3reason,
   q4,
   q4reason,
   'abc'
   
 );
 return this.http
 .post<{Name: string}>
 ("https://qmsogt-default-rtdb.firebaseio.com/Process01_QAP_1_4_3-QMS.json",  // .jons only present in firebase.
{
 ...newPeople,
 id: null
})
 .pipe(
   switchMap(resData =>{
     generatedId = resData.Name;
     return this.peoples49;
   }),
   take(1),
   tap(people =>{
     newPeople.id = generatedId;
     this._peoples49.next(people.concat(newPeople))
   })
 )


}
}
