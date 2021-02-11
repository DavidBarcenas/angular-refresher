import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { GifsService } from './services/gifs.service';

@NgModule({
  declarations: [GifsPageComponent, SearchComponent, ResultsComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [GifsPageComponent],
  providers: [GifsService],
})
export class GifsModule {}
