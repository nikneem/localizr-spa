import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { TooltipModule } from 'primeng/tooltip';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';
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
    TableModule,
    PanelModule,
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
    TableModule,
    PanelModule,
  ],
})
export class SharedComponentsModule {}
