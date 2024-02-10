import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{

  addPostForm!: FormGroup;
  // postService!:PostService; 
  // public formBuilder!:FormBuilder;

  constructor(public postService:PostService, public formBuilder:FormBuilder, public router:Router){
    this.postService = postService;
    this.formBuilder = formBuilder;
  }

  ngOnInit(): void {
    this.addPostForm = this.formBuilder.group({
      title:['', [Validators.required]],
      body:['',[Validators.required]]
    });
  }

  submitForm(){
    this.postService.createPost(this.addPostForm.value).subscribe(
      (post)=>{
        alert("Post has been submitted successfully.")
      },
      (error)=>{console.log("Some error happened.")}
    );
    this.router.navigateByUrl('/post/index');
  }
}
