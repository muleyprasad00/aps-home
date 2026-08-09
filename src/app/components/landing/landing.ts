import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent, FooterComponent, ApiService, UserDetailsService } from 'aps-common-ui';
@Component({
  selector: 'app-landing',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Landing implements OnInit {
  private userDetails = inject(UserDetailsService)
  apps: any = signal([]);
  ngOnInit(): void {
    if (this.userDetails.isUserLoggedIn) {
      this.userDetails.user$.subscribe(user => {
        if (user) {
          this.apps.set(user['apps']);
        }
      });
    }
  }

  openApp(url: string): void {
    window.location.href = url;
  }
}

