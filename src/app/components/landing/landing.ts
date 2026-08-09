import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent, FooterComponent, ApiService } from 'aps-common-ui';

@Component({
  selector: 'app-landing',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing implements OnInit {
  private apiService = inject(ApiService);

  ngOnInit(): void {

  }
}

