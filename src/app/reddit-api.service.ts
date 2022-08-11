import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedditApiService {
  apiUrl = "https://www.reddit.com/r/aww/.json"

  constructor(private http: HttpClient) { }

  getRedditPost():any{
    return this.http.get(this.apiUrl);
  }
}
