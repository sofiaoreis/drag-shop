import {Page, NavController, NavParams} from 'ionic-angular';
import {FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl} from 'angular2/common';
import {AccountRecoverNumPage} from '../account-recover-num/account-recover-num';
import {HelloIonicPage} from '../hello-ionic/hello-ionic';


@Page({
  templateUrl: 'build/pages/account-recovery/account-recovery.html',
  directives: [FORM_DIRECTIVES]
})
export class AccountRecoveryPage {

  recoverForm: ControlGroup;
  username: AbstractControl;

constructor(private nav: NavController, navParams: NavParams, fb: FormBuilder) {
  this.nav = nav;
  this.recoverForm = fb.group({
          'username': ['', Validators.compose([Validators.required])]
  });
  this.username = this.recoverForm.controls['username'];
}

  goBack() {
   this.nav.setRoot(HelloIonicPage);
 }

 onSubmit(value: string): void {
   if(this.recoverForm.valid) {
     console.log('Submitted value: ', value);
   }
   this.nav.push(AccountRecoverNumPage, {});
 }

 itemTapped() {
   this.nav.setRoot(HelloIonicPage);
 }
}
