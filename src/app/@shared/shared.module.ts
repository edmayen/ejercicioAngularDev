import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, HeaderComponent, FooterComponent],
  exports: [LoaderComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
