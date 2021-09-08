import { Component } from "@angular/core";

@Component({
  selector: 'app-post-creat',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{

  newPost = 'No content!';
  enteredValue ='';
  onAddPost() {
    //alert('post added!');
    //console.log(postInput);
    this.newPost = this.enteredValue;
  }


}
