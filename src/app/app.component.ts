import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from './core/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test-app';
  
  receivedId$: Observable<any> = new Observable();

  constructor(private commonService: CommonService) {}
  
  ngOnInit(): void {
    this.receivedId$ = this.commonService.get('');  
  }
}
