///<reference path="../../app/plugin/bmob/bmob-min.d.ts"/>
import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  types=[];
  constructor(public navCtrl: NavController) {
    this.types=["1","2","3","4"];
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
  ionViewDidLoad(){
    // setInterval(()=>{
    //   this.slides.slideNext(300,true);
    // },2000);
  }

  typeListClick(i){
    console.log(i)
  }

}
