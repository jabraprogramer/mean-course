import { Component } from "@angular/core";

@Component({
  selector: 'app-post-creat',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent{

  newPost = 'No content!';
  onAddPost() {
    //alert('post added!');
    this.newPost = 'the user\'post';
  }


}
