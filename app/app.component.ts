import {Component} from '@angular/core';

@Component({
    // find the selector tag in index.html
    selector: 'my-app',
    // inject into tag the below contents. Better to keep this file skinny. Use a separate file.
    templateUrl: 'app/app.component.html',
    // styling of blue-bg class
    styles: [ '.blue-bg{background-color:blue;}' ]
})
// this class is exported for use everywhere in app
export class AppComponent {
//private variable name: datatype is string = value
  // --private username:string = "Test"
  // custom type defined in interface, with object as value
  // --private currentUser:User = { username: "Test", email: "test@test.com" }

  // --private getUsername():string {
    // get currentUser's username
    // --return this.currentUser.username
    // --}
  private currentUser:User = { username: "test", email: "test@test.com" }

  // if boolean value not defined, defaults to false
  private hideEmail:boolean = true

  private disabledInput:boolean = false
  private disabledInput2:boolean = true

  // returns the value of [disabledInput]
  private isDisabled():boolean {
    return this.disabledInput2
  }

  private isBlueBg:boolean = true
  private bgColor:string = 'red' // can also be hex or rgba
  private fontcolor:string = '#000cff'
}

  // interface - similar to classes but only define types. maybe validation here?
  interface User {
    username:string,
    email:string
  }
