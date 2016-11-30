import {Component} from '@angular/core';

@Component({
    // find the selector tag in index.html
    selector: 'my-app',
    // inject into tag the below contents. Better to keep this file skinny. Use a separate file.
    templateUrl: 'app/app.component.html',
    styles: [ '.blue-bg{background-color:blue;}' ]
})
// this class is exported for use everywhere in app
export class AppComponent {
//private variable name: datatype is string = value
  private username:string = "Test"
  // custom type defined in interface, with object as value
  private currentUser:User = { username: "Test", email: "test@test.com" }

  private getUsername():string {
    // get currentUser's username
    return this.currentUser.username
    }
  }

  // interface - similar to classes but only define types. maybe validation here?
  interface User {
    username:string,
    email:string
  }
