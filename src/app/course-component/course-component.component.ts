import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-component',
  templateUrl: './course-component.component.html',
  styleUrls: ['./course-component.component.css']
})
export class CourseComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 
  @Input()
  title: String;

  @Input()
  crs: Course;

  @Input()
  brojac: Number;

  @Output()
  cuci = new EventEmitter<Course>();

  onClickView(){
    console.log("Cuci");
    this.cuci.emit(this.crs);
  }

  onImg(){
    return this.crs.iconUrl;
  }

  klasi(){
    return 'begin';
  }

}
