import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
export class MyApp {
  rootPage:any = 'HomePage';
  constructor(platform: Platform) {
    platform.ready().then(() => {
    });
  }
}

