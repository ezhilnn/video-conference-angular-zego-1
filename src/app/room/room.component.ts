import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'], // Note the correct property name 'styleUrls'
  host: { 'data-component': 'unique-room-component' } // Adding a unique host attribute to prevent ID collision
})
export class RoomComponent implements OnInit, AfterViewInit {
  @ViewChild('root', { static: false }) root!: ElementRef;
  roomID: string = "";

  constructor(private route: ActivatedRoute, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.roomID = params['roomId']; // Ensure roomID is set correctly
      console.log(this.roomID);
    });
  }

  async ngAfterViewInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const { ZegoUIKitPrebuilt } = await import('@zegocloud/zego-uikit-prebuilt');
      const randomString = this.generateRandomString(16);
      const randomString2 = this.generateRandomString(16);
      const appID = 1106772952;
      const serverSecret = "41ea10c92f184e64dcbf2077ae995239";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, this.roomID, randomString,randomString2);

      // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: this.root.nativeElement,
        sharedLinks: [
          {
            name: 'Personal link',
            url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + this.roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    }
  }
  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
}
