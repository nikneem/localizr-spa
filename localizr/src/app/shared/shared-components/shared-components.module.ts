import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { TooltipModule } from 'primeng/tooltip';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AvatarModule,
    MenubarModule,
    ButtonModule,
    MenuModule,
    TooltipModule,
    TranslatePipe,
    TranslateDirective,
  ],
  exports: [
    CommonModule,
    AvatarModule,
    MenubarModule,
    ButtonModule,
    MenuModule,
    TooltipModule,
    TranslatePipe,
    TranslateDirective,
  ],
})
export class SharedComponentsModule {}
