import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleService} from "./article.service";
import { ArticleCreationComponent } from './article-creation/article-creation.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

import { AuthorService} from "./author.service";
import { AuthorBiographieComponent } from './author-biographie/author-biographie.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorComponent } from './author/author.component';

const appRoutes: Routes = [
  { path: 'create', component: ArticleCreationComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: '', component: ArticlesComponent },
  { path: 'article/:id', component: ArticleDetailsComponent },
  { path: 'author/:name', component: AuthorBiographieComponent },
  { path: 'authors', component: AuthorListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    FilterPipe,
    ArticleDetailsComponent,
    AuthorBiographieComponent,
    AuthorListComponent,
    AuthorComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ArticleService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
