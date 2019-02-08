import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { BottomnavbarComponent } from './bottomnavbar/bottomnavbar.component';
import { SettingsnavbarComponent } from './settingsnavbar/settingsnavbar.component';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';

@NgModule({
  declarations: [TopnavbarComponent, BottomnavbarComponent, SettingsnavbarComponent, AsidenavbarComponent],
  imports: [
    CommonModule,
  ],
  exports: [TopnavbarComponent, BottomnavbarComponent, SettingsnavbarComponent, AsidenavbarComponent],
})
export class LayoutModule { }
