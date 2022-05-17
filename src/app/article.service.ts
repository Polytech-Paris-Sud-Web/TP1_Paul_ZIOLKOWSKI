import { Injectable } from '@angular/core';
import {Article} from './models/article'; 
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";  

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient) {
  }
  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles"); 
  }
  public deleteArticle(article: Article) {
    return this.http.delete<Article[]>('http://localhost:3000/articles/' + article.id);
  }
  public createArticle(Article: Article) {
    return this.http.post('http://localhost:3000/articles', Article);
  }
}
