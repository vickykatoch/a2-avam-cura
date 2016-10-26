import { Component, OnInit } from '@angular/core';
import {IBookFeed} from '../services/feeds';
import {BooksDataService} from '../services/booksdata.service';


@Component({
      selector: 'my-home',
      templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
      pageTitle : string = 'JavaScript, NodeJS, AngularJS, ReactJS, ES6, TypeScript... Tutorial from Beginners';
      feeds : IBookFeed[] =[];
      // "description": "Learn Web, Mobile Development and Design with Node.js, Angular.js, React.js, Python, MongoDB, HTML5, CSS3, JavaScript, PHP, mobile app development, Responsive Web Design",
      // "url": "https://codek.tv"

      constructor(private _booksData : BooksDataService){}

      ngOnInit() : void{
            this._booksData.getBookFeeds()
                  .subscribe((data: IBookFeed[])=> {
                        this.feeds = data
                        console.log(data);
                  });
      }

      
}