import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { VideoComponent } from './video/video.component';
import { Home1Component } from './home-1/home-1.component';
import { RoomComponent } from './room/room.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'join',
    component:JoinComponent
  },{
    path:'video-check',
    component:VideoComponent
  },{
    path:'home-1',
    component:Home1Component
  },{
    path:'room/:roomId',
    component:RoomComponent
  },{
    path:'create',
    component:CreateRoomComponent
  },{
    path:'about',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
