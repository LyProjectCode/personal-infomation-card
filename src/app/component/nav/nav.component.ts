import { Component, OnInit } from '@angular/core';
import { PersonDataService } from '../../person-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private personDataService: PersonDataService) { }

  ngOnInit() {
  }

  public onEsc() {
    //判断是否为ie
    if (navigator.userAgent.indexOf("MSIE") > 0) {
      //判断是否为ie6
      if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
        window.opener = null; window.close();
      }
      else {
        window.open('', '_top'); window.top.close();
      }
    }
    //判断是否为firefox
    else if (navigator.userAgent.indexOf("Firefox") > 0) {
      window.location.href = 'about:blank ';
    }
    //其他非firefox等主流浏览器如chrome,safari
    else {
      window.location.href = "about:blank";
      window.close();
    }
  }
}
