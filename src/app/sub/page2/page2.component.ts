import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Constants } from 'src/app/constants';
import { TabsetManagementService } from 'src/app/tabset-management.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  readonly title = Constants.functionId.page2;
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

  gotoPage3() {
    this.tabsetManager.addNewTabIfNotExist(Constants.functionId.page3, 'page3');
  }
}
