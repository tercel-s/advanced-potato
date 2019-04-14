import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalStorageManagementService } from './local-storage-management.service';

@Injectable({
  providedIn: 'root'
})
export class TabsetManagementService {
  constructor(private lStorageManager: LocalStorageManagementService) { }
  readonly newTabAdded = new Subject<any>();
  readonly tabRemoved = new Subject<number>();

  /** タブのモデルデータ */
  tabs: any[] = [];

  /**
   * 指定されたタブ識別子が、既に開かれているかどうかを確認し、
   * 開かれている場合は当該タブを選択、
   * 開かれていない場合は自ウィンドウ内にタブを新規追加します。
   * @param title タブ識別子
   * @param path タブに配置するコンポーネントのパス
   */
  addNewTabIfNotExist(title: string, path: string) {
    if (!title) { return; }
    if (!path) { return; }

    // 自分自身のウィンドウの中に存在するか
    if (!(this.tabs.filter(tab => tab.title === title).length < 0)) {
      this.tabs.forEach(tab => {
        if (tab.title === title) {
          tab.active = true;
          window.focus();
          return;
        }
      });
    }

    // 他所のウィンドウに存在するか
    const subWindowId = this.lStorageManager.findWindow(title);
    if (!!subWindowId) {
      const msg = {
        actionName: 'selectTab',
        title: `${title}`,
      };
      const win = window.open('', subWindowId);
      if (!!win) {
        win.postMessage(JSON.stringify(msg), '*');
        win.focus();
        return;
      }
    }

    // 結局どこにもない場合は仕方なく自分のタブに追加
    this.addNewTab(title, path);
    window.focus();
  }

  /**
   * 指定されたタブ識別子を自ウィンドウ内に新規追加します。
   * @param title タブ識別子
   * @param path タブに配置するコンポーネントのパス
   */
  addNewTab(title: string, path: string) {
    const newTabItem = {
      title: `${title}`,
      content: `${path}`,
      active: true
    };

    // タブのモデルデータを更新
    this.tabs.push(newTabItem);

    // ローカルストレージの状態を更新
    this.lStorageManager.addFunctionId(title);

    // タブ新規追加イベント(rxjs)を発行
    this.newTabAdded.next(newTabItem);
  }

  /**
   * タブ選択時のイベントハンドラです。
   * モデルデータを更新します。
   * @param title タブ識別子
   */
  selectTab(title: string) {
    this.tabs.forEach(e => {
      if (e.title === title) {
        e.active = true;
      }
    });
  }

  /**
   * タブ削除時のイベントハンドラです。
   * @param tab 被削除タブのモデルデータ
   */
  removeTabHandler(tab: any) {
    // ローカルストレージの状態更新
    this.lStorageManager.removeFunctionId(tab.title);

    // モデルデータの更新
    const index = this.tabs.indexOf(tab);
    this.tabs.splice(index, 1);

    // タブ削除イベント(rxjs)を発行
    this.tabRemoved.next(index);
  }
}
