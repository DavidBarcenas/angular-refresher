import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { GifsService } from './services/gifs.service';
import { ParamInterceptor } from './params.interceptor';

@NgModule({
  declarations: [GifsPageComponent, SearchComponent, ResultsComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [GifsPageComponent],
  providers: [
    GifsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ParamInterceptor,
      multi: true,
    },
  ],
})
export class GifsModule {}
