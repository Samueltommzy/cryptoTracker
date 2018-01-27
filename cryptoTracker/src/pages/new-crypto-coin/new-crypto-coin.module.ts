import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewCryptoCoinPage } from './new-crypto-coin';

@NgModule({
  declarations: [
    NewCryptoCoinPage,
  ],
  imports: [
    IonicPageModule.forChild(NewCryptoCoinPage),
  ],
})
export class NewCryptoCoinPageModule {}
