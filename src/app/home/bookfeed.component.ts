import { Component, OnInit, Input } from '@angular/core';
import {IBookFeed} from '../services/feeds';

@Component({
      selector: 'book-feed', 
      templateUrl: './bookfeed.component.html'
})
export class BookFeedComponent{
      @Input() feed : IBookFeed;
      
}