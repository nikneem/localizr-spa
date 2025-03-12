import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';

@Component({
  selector: 'lcl-root',
  imports: [RouterOutlet, TranslatePipe, TranslateDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'localizr';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
