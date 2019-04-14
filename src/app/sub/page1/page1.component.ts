import { Component, OnInit } from '@angular/core';
import { TabsetManagementService } from 'src/app/tabset-management.service';
import { Title } from '@angular/platform-browser';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  readonly title = Constants.functionId.page1;
  constructor(
    titleService: Title,
    private tabsetManager: TabsetManagementService) {
    titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

  /** 遷移処理 */
  gotoPage2() {
    this.tabsetManager.addNewTabIfNotExist(Constants.functionId.page2, 'page2');
  }

  gotoPage3() {
    this.tabsetManager.addNewTabIfNotExist(Constants.functionId.page3, 'page3');
  }
}
