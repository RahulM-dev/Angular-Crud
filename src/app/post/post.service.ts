import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  baseURL:string = "http://localhost:3000/posts";
  
  //It's written to set the headers(Important for real API calls)
  //It's optional
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  };
  http!:HttpClient;
  constructor(http: HttpClient) { 
      this.http = http;
  }

  //To Retrieve all the Posts
  getAllPosts():Observable<Post[]>{
      return this.http.get<Post[]>(this.baseURL, this.httpOptions);
  }

  //To Retrieve a Post By Id
  findPostById(id:number):Observable<Post>{
    return this.http.get<Post>(this.baseURL+'/'+id, this.httpOptions);
  }

  //To Create a Post
  createPost(post:Post):Observable<Post>{
    return this.http.post<Post>(this.baseURL, post, this.httpOptions);
  }

  //To Update a post
  updatePost(id:number, post: Post):Observable<Post>{
    return this.http.put<Post>(this.baseURL+'/'+id, post, this.httpOptions);
  }

  deletePost(id:number){
    return this.http.delete<Post>(this.baseURL+'/'+id);
  }


}
