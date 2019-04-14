import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { LocalStorageManagementService } from '../local-storage-management.service';
import { Constants } from '../constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  readonly messageSrc = fromEvent(window, 'message');
  constructor(
    private lStorageManager: LocalStorageManagementService
  ) { }

  ngOnInit() {
  }

  /** 実装パターンAの遷移処理 */
  gotoPage1PatternA() {
    this.patternA(Constants.functionId.page1, 'page1');
  }

  gotoPage2PatternA() {
    this.patternA(Constants.functionId.page2, 'page2');
  }

  gotoPage3PatternA() {
    this.patternA(Constants.functionId.page3, 'page3');
  }

  /** 実装パターンBの遷移処理 */
  gotoPage1PatternB() {
    this.patternB(Constants.functionId.page1, 'page1');
  }

  gotoPage2PatternB() {
    this.patternB(Constants.functionId.page2, 'page2');
  }

  gotoPage3PatternB() {
    this.patternB(Constants.functionId.page3, 'page3');
  }

  /** パターンA共通処理 */
  private patternA(title: string, path: string) {
    const subWindowId = this.lStorageManager.findWindow(title);
    if (!!subWindowId) {
      try {
        this.postSelectTab(
          window.open('', subWindowId), title);
      } catch (e) {
        this.allKill();
        this.openSubWindow(title, path);
      }
    } else {
      this.openSubWindow(title, path);
    }
  }

  /** パターンB共通処理 */
  private patternB(title: string, path: string) {
    const subWindowIdList = this.lStorageManager.getSubWindowIdList();
    if (subWindowIdList.length === 1) {
      try {
        this.postAddNewTab(
          window.open('', subWindowIdList[0]), title, path);
      } catch (e) { console.log(e); }
    } else {
      this.allKill();
      this.openSubWindow(title, path);
    }
  }

  /**
   * 子ウィンドウを起動し、指定されたタブ識別子に基づいて新規タブを追加する。
   * @param title タブ識別子
   * @param path タブに配置するコンポーネントのパス
   */
  private openSubWindow(title: string, path: string) {
    const win = window.open(Constants.tabContainerPath, null,
      Constants.subWindowOpenOptions);

    // 子ウィンドウが初期化され、postMessage通信可能な状態になると、
    // 子ウィンドウからウィンドウIDの通知メッセージが飛んでくる。
    // (SubWindowManagementServiceをDIしている子ウィンドウの仕様)
    //
    // この状態では、まだ子ウィンドウにはタブが一つもない状態なので、
    // 子ウィンドウに「新規タブ追加」要求のメッセージを送る。
    // (子画面側はそれを受けて、タブを新規追加しコンポーネントをロードする)
    this.messageSrc.subscribe((e: any) => {
      if (e.data === win.name) {
        this.postAddNewTab(win, title, path);
      }
    });
  }

  /**
   * 指定した子ウィンドウに「新規タブ追加」要求のメッセージを送る。
   * @param win 対象の子ウィンドウオブジェクト
   * @param title タブ識別子
   * @param path タブに配置するコンポーネントのパス
   */
  private postAddNewTab(win: Window, title: string, path: string) {
    const msg = {
      actionName: 'addNewTab',
      title: `${title}`,
      path: `${path}`
    };
    win.postMessage(JSON.stringify(msg), '*');
    win.focus();  // Firefox対策
  }

  /**
   * 指定した子ウィンドウに「既存タブ選択」要求のメッセージを送る。
   * @param win 対象の子ウィンドウオブジェクト
   * @param title タブ識別子
   */
  private postSelectTab(win: Window, title: string) {
    const msg = {
      actionName: 'selectTab',
      title: `${title}`,
    };
    win.postMessage(JSON.stringify(msg), '*');
    win.focus();  // Firefox対策
  }

  /**
   * バグったとき用の初期化メソッド
   */
  allKill() {

    // 子ウィンドウを全て閉じる
    this.lStorageManager.getSubWindowIdList().forEach(id => {
      window.open('', id).close();
    });

    // ローカルストレージを全削除する
    window.localStorage.clear();
  }
}
