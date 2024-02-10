import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../model/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{

  id!:number;
  post!:Post;
  constructor(private route:ActivatedRoute, private postService:PostService){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.postService.findPostById(this.id).subscribe(
      (post)=>{this.post = post;},
      (error)=>{console.log("Some Error Happened");}
    );
  }


}
