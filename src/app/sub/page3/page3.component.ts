import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Constants } from 'src/app/constants';
import { TabsetManagementService } from 'src/app/tabset-management.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  readonly title = Constants.functionId.page3;
  constructor(
    titleService: Title,
    private tabsetManager: TabsetManagementService) {
    titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

  /** 遷移処理 */
  gotoPage1() {
    this.tabsetManager.addNewTabIfNotExist(Constants.functionId.page1, 'page1');
  }

  gotoPage2() {
    this.tabsetManager.addNewTabIfNotExist(Constants.functionId.page2, 'page2');
  }
}
