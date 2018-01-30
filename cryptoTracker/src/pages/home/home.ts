import { Component }        from '@angular/core';
import { NavController , IonicPage}    from 'ionic-angular';
import { HoldingsProvider } from '../../providers/holdings/holdings' 
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private holdingsProvider : HoldingsProvider) {

  }
ionViewDidLoad(): void{
  this.holdingsProvider.getHoldings();
}
createHolding(): void{
  this.navCtrl.push('NewCryptoCoinPage');
}
gotoCryptonator(): void{
 window.open('https://www.cryptonator.com/api', '_system');
}
refreshPrices(refresher):void{
  this.holdingsProvider.fetchPrice(refresher);
}
}
