import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CourseService {
    constructor (private _http :Http){
        
    }
    getCourses(url){
        return this._http.get(url).
        map(res=>res.json());
    } 
    postCourses(url,json){
        var parameters= "json="+json;
        var headers=  new Headers();
        headers.append('Content-type','application/x-www-form-urlencoded');
        return this._http.post(url,parameters,{
            headers:headers
        })
        .map(res=>res.json())
    }
}