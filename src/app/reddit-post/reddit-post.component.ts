import { Component, Input, OnInit } from '@angular/core';
import { Child } from '../reddit-post';

@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css']
})
export class RedditPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() child: Child = {} as Child;

}
