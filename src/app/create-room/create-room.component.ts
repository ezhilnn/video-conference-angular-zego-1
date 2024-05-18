import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrl: './create-room.component.css'
})
export class CreateRoomComponent {
  constructor(private route:Router){}
onSubmit(f: NgForm) {
  this.route.navigateByUrl(`/room/${f.control.value.id}`);
}

}
