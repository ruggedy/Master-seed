import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../shared/index';

@Component({
	moduleId: module.id,
	selector: 'sd-featured-post',
	templateUrl: 'featured-post.component.html',
	styleUrls: ['featured-post.component.css']
})
export class FeaturedPostComponent implements OnInit {
	post: any;
	
	constructor( private _blogService: BlogService) { }

	ngOnInit() { 
		this._blogService.getFeaturedPost()
			.subscribe(
				data => {
					this.post = data.obj.post;
					console.log(data.obj.post);
				},
				error=> console.log(error)
			)
	}

}