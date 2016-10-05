import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { PostComponent, CategoryComponent, TagsComponent } from './index';
import { PrivateSharedModule } from '../shared/shared.module';
import { MdGridListModule } from '@angular2-material/grid-list';
import { routing } from './admin.routes'
import { PostService, ImageUploadService } from '../shared/index';
import { CKEditorModule } from 'ng2-ckeditor';
import { MdRadioModule} from '@angular2-material/radio';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { AccordionModule } from 'primeng/primeng';
import { NgSemanticModule } from 'ng-semantic';


@NgModule({
  imports: [CommonModule, PrivateSharedModule,  routing, RouterModule, MdGridListModule,
  			CKEditorModule, MdRadioModule, MdCheckboxModule, AccordionModule,
        NgSemanticModule],
  declarations: [AdminComponent, PostComponent, CategoryComponent, TagsComponent],
  providers: [PostService, ImageUploadService]

})

export class AdminModule { }
