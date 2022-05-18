import { Component, OnInit } from '@angular/core';
import {Article} from "../models/article";
import {ArticleService} from "../article.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  searchText: String;

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