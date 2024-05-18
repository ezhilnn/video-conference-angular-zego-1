import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-1',
  templateUrl: './home-1.component.html',
  styleUrl: './home-1.component.css'
})
export class Home1Component {
  constructor(private route:Router){}
  roomId:String="";
  enterRoom() {
      console.log(this.roomId);
      this.route.navigateByUrl(`/room/${this.roomId}`)
    }

}
