import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements AfterViewInit {
  videoRef!: HTMLVideoElement;
  videoOn = false;
  stream!: MediaStream;
  pc!: RTCPeerConnection; 

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.videoRef = this.elementRef.nativeElement.querySelector('#video');
  }

  turnOn() {
    this.setUpCamera();
    this.videoOn = true;
  }

  setUpCamera() {
    navigator.mediaDevices.getUserMedia({
      video: { width: 600, height: 500 },
      audio: true
    }).then(stream => {
      this.stream = stream;
      this.videoRef.srcObject = stream;
    });
  }

  turnOffMicrophone() {
    if (this.stream) {
      const audioTracks = this.stream.getAudioTracks();
      audioTracks.forEach(track => track.stop());
    }
  }

  turnOffCamera() {
    if (this.stream) {
      const videoTracks = this.stream.getVideoTracks();
      videoTracks.forEach(track => track.stop());
    }
  }

  turnOff() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => {
        track.stop(); // Stop each track
      });
      this.videoRef.srcObject = null;
      this.videoOn = false;
    }
  }
}
