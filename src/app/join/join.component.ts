import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {
  constructor(private route:Router){}

  
//http://localhost:4200/room/yjy?roomID=yjy
onSubmit(f: NgForm) {
console.log(f.control.value.id);
const roomlink=f.control.value.id;
if (roomlink.startsWith("http")) {
  this.route.navigateByUrl(`${f.control.value.id}`);
} else {
  this.route.navigateByUrl(`/room/${f.control.value.id}`);
}

}

}
