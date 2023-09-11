import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsData: any;
  newsArticles: Array<any> = [];
  apiUrl: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.apiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=976e6916061040e88699f842362d4a94';
    this.httpClient.get(this.apiUrl).subscribe ( (data) => {
      this.newsData = data;
      this.newsArticles = this.newsData.articles;
    });
  }
}
