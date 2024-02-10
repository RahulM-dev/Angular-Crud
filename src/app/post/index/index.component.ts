import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../model/post';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{
  
  posts:Post[] = [];
  postService!:PostService;
  constructor(postService:PostService){
      this.postService = postService;
    }
  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      (posts)=>{this.posts = posts;},
      (erorr)=>{console.log("Some Error Happened");}
    );
    
  }
  deletePost(id:number):void{
    this.postService.deletePost(id).subscribe(
      (post)=>{
            this.postService.getAllPosts().subscribe(
              (posts)=>{this.posts = posts;},
              (error)=>{console.log("Some Error Happened");}
            );
            alert("The Post with id: " + post.id+ " has been deleted Successfully");
          },
      (error)=>{console.log("Some error happened");}
    );

    
  }

}
