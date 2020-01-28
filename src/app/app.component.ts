import { Component } from '@angular/core';
import { WrappedNodeExpr } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  prepositionList = ["of", "the"]
  title = 'TitleCaseFormatter';
  username;

  splitter(username) {

    let splitted = this.username.split(" ");
    let myArray = []

    for (let word of splitted) {
      let lowerWord = word.toLowerCase();
      if (this.prepositionList.includes(lowerWord)) {
        myArray.push(lowerWord.slice(0).toLowerCase())
      } else {
        myArray.push(lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1).toLowerCase())
      }
    }
    if (this.prepositionList.includes(splitted[0])) {
      myArray[0] = splitted[0].charAt(0).toUpperCase() + splitted[0].slice(1).toLowerCase()
    }
    console.log(myArray)
  }
}
