import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../shared/index';


@Component({
	moduleId: module.id,
	selector: 'sd-side',
	templateUrl: 'side.component.html',
	styleUrls: ['side.component.css']
})
export class SideComponent implements OnInit {
	posts: any;
	tags: any;
	categories: any;

	constructor(private _blogService: BlogService) { }

	ngOnInit() { 
		this._blogService.getPosts()
			.subscribe(
				data => {
					this.posts = data.obj;
				},
				error => console.log(error)
			)
		this._blogService.getTags()
			.subscribe(
				data => {
					this.tags = data.obj;
				}
			)
		this._blogService.getCategories()
			.subscribe(
				data => {
					this.categories = data.obj;
					console.log(data.obj)
				}
			)
	}

}