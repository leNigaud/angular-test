import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  posts: any[] = [];

  constructor(private dataService : DataService ) {}

  ngOnInit() : void {
    this.dataService.getData().subscribe(
      (response) => {
        this.posts = response
      }
    )
  }
  
}
