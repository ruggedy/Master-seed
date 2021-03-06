import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../shared/index';

@Component({
	moduleId: module.id,
	selector: 'sd-post-items',
	templateUrl: 'post-items.component.html',
	styleUrls: ['post-items.component.css']
})
export class PostItemsComponent implements OnInit {
	
	posts: any;

	constructor(private _blogService: BlogService) { }

	ngOnInit() { 
		this._blogService.getPosts()
			.subscribe(
				data => {
					this.posts = data.obj;
					console.log(data.obj);
				},
				error => console.log(error)
			)
	}

}