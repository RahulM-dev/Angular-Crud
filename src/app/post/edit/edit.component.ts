import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Post } from '../model/post';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  addPostForm!: FormGroup;
  id!:number;
  post!:Post;
  // postService!:PostService; 
  // public formBuilder!:FormBuilder;

  constructor(public postService:PostService, public formBuilder:FormBuilder,
              public route:ActivatedRoute, public router:Router){
    this.postService = postService;
    this.formBuilder = formBuilder;
    this.addPostForm = this.formBuilder.group({
      title:['', [Validators.required]],
      body:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    
    this.postService.findPostById(this.id).subscribe(
      (post)=>{
        this.post = post;
        this.addPostForm = this.formBuilder.group({
          title:[this.post.title, [Validators.required]],
          body:[this.post.body,[Validators.required]]
        });
      },
      (error)=>{console.log("Some error happened")}
    );
  }

  submitForm(){
    console.log(this.addPostForm.value);
    this.postService.updatePost(this.id, this.addPostForm.value).subscribe(
      (post)=>{
        this.post = post;
      },
      (error)=>{
        console.log("Some Error happened.");
      }
    );
    this.router.navigateByUrl('/post/index');
  }
}
