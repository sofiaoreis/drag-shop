import {Page, NavController, NavParams} from 'ionic-angular';
import {FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl} from 'angular2/common';


@Page({
  templateUrl: 'build/pages/account-recover-num/account-recover-num.html',
  directives: [FORM_DIRECTIVES]
})

export class AccountRecoverNumPage {
  recoverForm: ControlGroup;
  code: AbstractControl;

  constructor(private nav: NavController, navParams: NavParams, fb: FormBuilder) {
    this.nav = nav;
    this.recoverForm = fb.group({
            'code': ['', Validators.compose([Validators.required])]
    });
    this.code = this.recoverForm.controls['code'];
  }

  goBack() {
   this.nav.pop();
 }

 onSubmit(value: string): void {
   if(this.recoverForm.valid) {
     console.log('Submitted value: ', value);
   }
 }
}
