import { Component, OnInit } from '@angular/core';
import { CarouselComponent, FeaturedPostComponent, PostItemsComponent, SideComponent } from '../index';
import { MdGridListModule } from '@angular2-material/grid-list';
import { BlogService } from '../../shared/index';

@Component({
	moduleId: module.id,
	selector: 'sd-initial-page',
	templateUrl: 'initial-page.component.html',
	styleUrls: ['initial-page.component.css']
})
export class InitialPageComponent implements OnInit {
	constructor( private _blogService: BlogService) { }

	ngOnInit() { 
		
	}

}