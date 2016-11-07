import { Injectable }     from '@angular/core';
import { Http,
         Response,
         Headers,
         RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs';

@Injectable()
export class BloggService {
  private URL = 'https://api.parse.com/1/classes/blogg_doc?where={"school":"Humlan"}&include=blogg_author,images';

  constructor(private _http: Http) { }

  getCards() {
    let headers = new Headers({ 'Content-Type': 'application/json',
                                'X-Parse-Application-Id': 'VjiLfLONSY5lfv96XNG08Ey1rsIik8VKZD3jvvUk',
                                'X-Parse-REST-API-Key': 'BCBkGNutwvP7hfiMTLT4mro54y80LksfSWLjHURJ'
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.URL, options)
                     .map(this.extractData)
                     .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.results || {};
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}