///<reference path="../../app/plugin/bmob/bmob-min.d.ts"/>
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    // Bmob.initialize("12bf466ae0970c1c0bf4556835c3526c", "27cdadb42d4f86d79acbdc6ae1febf1c");
    //
    // var TestObject = Bmob.Object.extend("TestObject");
    // var testObject = new TestObject();
    // testObject.save({foo: "bar"}, {
    //   success: function(object) {
    //     console.log("success")
    //   },
    //   error: function(model, error) {
    //     console.log("error")
    //   }
    // });
  }

}
