import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, setDoc, query, orderBy } from '@angular/fire/firestore';
import { Post } from '../interfaces/post.interface';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private firestore: Firestore
  ) { }

    addPost(post: Post){
      
      const postRef = collection(this.firestore, 'posts');
      
      return addDoc(postRef, post);
    }

    getPosts():Observable<Post[]>{
    
      const postRef = collection(this.firestore, 'posts');
      const orderedQuery = query(postRef, orderBy("timestamp", "desc"));
      return collectionData(orderedQuery, { idField: 'id' }) as Observable<Post[]>;
    }

    async addLike(post: Post) {
      const postDocRef = doc(this.firestore, `posts/${post.id}`);
      const updatedLikes = (post.likes || 0) + 1;
  
      try {
        await setDoc(postDocRef, { likes: updatedLikes }, { merge: true });
      } catch (error) {
        console.error('Error updating likes:', error);
      }
    }

    async addSad(post: Post) {
      const postDocRef = doc(this.firestore, `posts/${post.id}`);
      const updatedSads = (post.sads || 0) + 1;
  
      try {
        await setDoc(postDocRef, { sads: updatedSads }, { merge: true });
      } catch (error) {
        console.error('Error updating sads:', error);
      }
    }

    async addLove(post: Post) {
      const postDocRef = doc(this.firestore, `posts/${post.id}`);
      const updatedLoves = (post.loves || 0) + 1;
  
      try {
        await setDoc(postDocRef, { loves: updatedLoves }, { merge: true });
      } catch (error) {
        console.error('Error updating loves:', error);
      }
    }
    
    

}
