// header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMenuComponent } from '../../../pages/profile/pages/profile-menu/profile-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ProfileMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  candidateName = 'Candidate Name';  // dynamic value later
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
