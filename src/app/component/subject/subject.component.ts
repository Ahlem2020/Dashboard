import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/Model/Subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }

ListSubject : Subject[];

  ngOnInit(): void {
    this.subjectService.ShowAll().subscribe(subject =>this.ListSubject=subject);
  }

}
