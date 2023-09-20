import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.scss'],
})
export class PopupMenuComponent {
  isOpen: boolean = false;

  constructor(private scroller: ViewportScroller) {}

  link(callLink: any) {
    window.open(callLink);
  }

  scrollToTarget(target: string) {
    this.scroller.scrollToAnchor(target);
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
