import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-app-error',
  templateUrl: './app-error.component.html',
  styleUrls: ['./app-error.component.css']
})
export class AppErrorComponent implements OnInit {
  errormessage: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //this.errormessage = this.route.snapshot.data['message'];
    this.route.data.subscribe(
      (data: Data) => {
        this.errormessage = data['message'];

      }
    );

  }

}
