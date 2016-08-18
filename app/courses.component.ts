import {Component} from 'angular2/core'
import {CourseService} from './courses.service' 

@Component({
    selector: 'courses',
    template: `
            <h2>Courses</h2>   
            {{title}} 
            <ul>
            <li *ngFor="#course of courses"> {{course.brand}}</li>
            </ul>
    `,
    providers: [CourseService]
})
export class CoursesComponent {
     title= "Component Title  ";
     courses;
     constructor(courseService: CourseService){
         courseService.getCourses('http://localhost:8080/server.php')
         .subscribe(
             data=> this.courses=JSON.parse(JSON.stringify(data)),
             error=> console.log(error),
             ()=> console.log("finished")
         );
         
     }
}