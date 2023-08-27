import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{

  form: FormGroup  = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    content: new FormControl('', [Validators.required, Validators.minLength(4)]),
    username: new FormControl('Anonymous'),
    contact: new FormControl('', [ Validators.email]),

  });

  constructor(
    private postService: PostService,
    private router: Router 

  ) { }
  ngOnInit(): void {
    
  }

  addPost(): void {
    
    if (this.form.valid) {
      
      let post: Post = {
        title: this.form.value.title,
        content: this.form.value.content,
        username: this.form.value.username,
        likes: 0,
        sads: 0,
        loves: 0,
        timestamp: new Date(),
        
      }

      console.log(post);
      this.postService.addPost(post);
      this.form.reset();
      alert('Post added successfully');
      this.router.navigate(['/']);
    } else {
      alert('Please fill all the fields');
    }



  }
}
