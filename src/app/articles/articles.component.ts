import { Component, OnInit } from '@angular/core';
import {Article} from "../models/article";
import {ArticleService} from "../article.service";
import {Observable} from "rxjs";  
import {of} from "rxjs";  

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private articleService: ArticleService) {
    this.articles = [] ;
  }
  
  delete(article: Article) {
    this.articleService.deleteArticle(article).subscribe(() => this.getArticles());
  }

  
  getArticles() {
      this.articleService.getArticles().subscribe(it => {
          this.articles = it;
      });
  }

  ngOnInit() {
      this.getArticles();
  }

}