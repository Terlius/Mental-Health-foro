import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent {
  @Input() post: Post = {
    title: '',
    content: '',
    username: '',
    likes: 0,
    sads: 0,
    loves: 0,
    contact: ''
  };


  constructor(
    private postService: PostService
  ) {
    console.log(this.post.contact);

   }


   addLike(){
    this.postService.addLike(this.post);
  }

  addSad(){
    this.postService.addSad(this.post);
  }

  addLove(){
    this.postService.addLove(this.post);
  }
}
