import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-variable',
  templateUrl: './global-variable.component.html',
  styleUrls: ['./global-variable.component.css']
})
export class GlobalVariableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public static CheckLogin: string = "";
  public static LoggedUserId : any ;
  public static LoggedUserEmail :any='';

}
