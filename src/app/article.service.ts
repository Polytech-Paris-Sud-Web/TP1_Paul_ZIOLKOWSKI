import { Injectable } from '@angular/core';
import {Article, CreateArticle} from './models/article'; 
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";  

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient) {
  }
  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles?_sort=createdAt&_order=desc"); 
  }
  public getLastsArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles?_sort=createdAt&_order=desc&_start=0&_end=10"); 
  }
  

  public getArticle(id: number): Observable<Article> {
    return this.http.get<Article>("http://localhost:3000/articles/"+id); 
  }

  public getArticlesOfAuthor(name: string): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles?author="+name+"&_sort=createdAt&_order=desc"); 
  }

  public deleteArticle(article: Article) {
    return this.http.delete<Article[]>('http://localhost:3000/articles/' + article.id);
  }
  public createArticle(Article: CreateArticle) {
    return this.http.post('http://localhost:3000/articles', Article);
  }
}
