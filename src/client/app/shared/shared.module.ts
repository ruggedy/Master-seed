import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
import { NameListService } from './name-list/index';
import { PostService, ImageUploadService, BlogService } from './index';
import { } from './'

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ToolbarComponent, NavbarComponent],
  exports: [ToolbarComponent, NavbarComponent,
    CommonModule, FormsModule, RouterModule]
})
export class PrivateSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PrivateSharedModule,
      providers: [NameListService, PostService, ImageUploadService, BlogService]
    };
  }
}
