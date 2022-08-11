import { Component, OnInit } from '@angular/core';
import { RedditApiService } from '../reddit-api.service';
import { Data, Reddit } from '../reddit-post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  reddit: Reddit = {} as Reddit;

  constructor(private RedditApiService: RedditApiService) { }

  ngOnInit(): void {
    this.RedditApiService.getRedditPost().subscribe((response: Reddit) => {
      this.reddit = response;
    });
  }

}
