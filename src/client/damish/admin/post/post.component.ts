import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CKEditorModule } from 'ng2-ckeditor';
import { TagsComponent } from '../tags/index';
import { CategoryComponent } from '../category/index';
import { PostService, ImageUploadService } from '../../shared/index';
import { MdGridListModule } from '@angular2-material/grid-list';
import { MdCheckboxModule } from '@angular2-material/checkbox'; 
import 'rxjs/Rx';  
import {Observable} from 'rxjs/Observable';  

@Component({
	moduleId: module.id,
	selector: 'sd-post',
	templateUrl: 'post.component.html',
	styleUrls: ['post.component.css'],
	
})
export class PostComponent implements OnInit {
	post:any;
	trustedPost: any;
	tags: any[];
	images: any[] = [];
	data: Observable<any>;
	title: string;
	categoryList:any;
	featured: any = false;
	tagList:any;
	file: any;

	category:any;

	constructor(private sanitizer: DomSanitizer, private _postService: PostService, private _imageUploadService: ImageUploadService) { 
	}

	selectedTags(event:any){
		this.tags = event.value;
	}

	selectedCategory(event:any){
		this.category = event.value;
	}

	onChange(event:any) {
		console.log(event);
		console.log(this.post);
		this.trustedPost = this.sanitizer.bypassSecurityTrustHtml(this.post);
	}

	onSubmit(){
				
		if(this.post && this.category && this.title){
			let data = {
				title: this.title,
				body: this.post,
				category: this.category,
				tags: this.tags,
				mainPicture: this.images[0]? this.images[0] : '',
				featured: this.featured
			}
			this._postService.newPost(data)
				.subscribe(
					data=>console.log(data),
					error=> console.log(error)
				)
		}

	}

	changeFeatured(event){
		this.featured = event.checked;
	}

	onUpload(){
		this._imageUploadService.uploadImage(this.file)
			.then((response) => {
				let imageArray = response.obj;
				imageArray.forEach((image) => {
					let index = this.images.indexOf(image);

					if(index === -1){
						this.images.push(image)
					}
				})
			})
			.catch(err => {
				console.log(err)
			})
	}



	ngOnInit() { 
		this._postService.getCategorys()
			.subscribe(
				data=> {
					if(data.obj){
						this.categoryList = data.obj;
					} else {
						this.categoryList = [];
					}
				},
				error=> console.log(error)
			)
		this._postService.getTags()
			.subscribe(
				data=> {
					if(data.obj){
						this.tagList = data.obj;
					} else {
						this.tagList = [];
					}
				},
				error=> console.log(error)
			)
	}

}