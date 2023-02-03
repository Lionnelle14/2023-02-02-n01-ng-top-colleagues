import {Component, EventEmitter, Output} from '@angular/core';
import {LikeHate} from "../../../models/like-hate";

@Component({
  selector: 'tc-like-hate',
  templateUrl: './like-hate.component.html',
})
export class LikeHateComponent {
  @Output() evtLikeHate = new EventEmitter<LikeHate>();

  like(){
    this.evtLikeHate.emit(LikeHate.Like);
  }

  hate(){
    this.evtLikeHate.emit(LikeHate.Hate);
  }
}
