import { Component, OnInit, ViewChild, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { TabsetManagementService } from 'src/app/tabset-management.service';
import { SubWindowManagementService } from 'src/app/sub-window-management.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '*',
        opacity: 1
      })),
      state('closed', style({
        height: '0',
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.2s')
      ]),
      transition('closed => open', [
        animate('0.2s')
      ]),
    ]),
  ]
})
export class TabContainerComponent implements OnInit, AfterViewChecked {

  constructor(
    public tabsetManager: TabsetManagementService,  // publicにしないとプロダクションビルドでコケる
    private subWindowManager: SubWindowManagementService,
    private router: Router,
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef) { }

  /** ngx-bootstrapのTabsetコンポーネント */
  @ViewChild('tabset') tabset: TabsetComponent;

  ngOnInit() {
    window.name = this.subWindowManager.windowId;

    /** 新規タブが開かれたら、当該タブを選択状態にする */
    this.tabsetManager.newTabAdded.subscribe(tab => {
      this.selectTabHandler(tab);
    });

    /** リロード検知
     * (gh-pagesにホスティングすると動かない)
     */
    try {
      // tslint:disable-next-line: deprecation
      if (window.performance.navigation.type === 1) {
        console.log('reloaded!');
        window.close();
      }
    } catch (e) { }
  }

  /** 子コンポーネントから強制的に状態を書き換えた際に
   * Angularの変更検知がエラーを吐かないようにするための姑息的措置。
   */
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

  /**
   * タブを選択した際のイベント処理
   * @param tab 被選択タブ
   */
  selectTabHandler(tab: any) {
    tab.active = true;

    // ブラウザの戻る・進むは無効化しておく
    // (削除済のタブに紐づけられたURLに遷移させないため）
    this.router.navigate([tab.content], { relativeTo: this.route, replaceUrl: true });
    window.focus(); // Forefox対策コード
  }

  /**
   * タブを削除した際のイベント処理
   * @param tab 被削除タブ
   */
  removeTabHandler(tab: any): void {
    this.tabsetManager.removeTabHandler(tab);
  }
}
