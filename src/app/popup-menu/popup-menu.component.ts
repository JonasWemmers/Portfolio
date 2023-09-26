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
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
