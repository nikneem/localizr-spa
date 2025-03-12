import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'lcl-auth-redirect-page',
  imports: [FieldsetModule, TranslatePipe],
  templateUrl: './auth-redirect-page.component.html',
  styleUrl: './auth-redirect-page.component.scss',
})
export class AuthRedirectPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
