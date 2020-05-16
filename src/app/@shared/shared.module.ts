import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//directives
import { OnlyNumber } from './directives/only-number.directive';
import { DisableControlDirective } from './directives/disable-input.directive';

const DIRECTIVES = [OnlyNumber, DisableControlDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [...DIRECTIVES, LoaderComponent, HeaderComponent, FooterComponent],
  exports: [...DIRECTIVES, LoaderComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
