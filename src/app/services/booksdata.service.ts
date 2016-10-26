import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {IBookFeed} from './feeds';

@Injectable()
export class BooksDataService {
      private _url : string = 'api/books.json';

      constructor(private _http: Http) {}

      getBookFeeds() : Observable<IBookFeed[]>{
            return this._http.get(this._url)
                  .map((resp:Response)=> resp.json().items)
                  .catch(this.handleError);
      }
      
      handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
