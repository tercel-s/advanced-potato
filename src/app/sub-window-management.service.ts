import { Injectable } from '@angular/core';
import * as uuid from 'uuid';
import { fromEvent } from 'rxjs';
import { TabsetManagementService } from './tabset-management.service';
import { Constants } from './constants';
import { LocalStorageManagementService } from './local-storage-management.service';

@Injectable({
  providedIn: 'root'
})
export class SubWindowManagementService {

  /** 自身のウィンドウID */
  readonly windowId = uuid.v4();

  readonly unloadSrc = fromEvent(window, 'unload');
  readonly messageSrc = fromEvent(window, 'message');

  constructor(
    private tabsetManager: TabsetManagementService,
    private lStorageManager: LocalStorageManagementService) {

    // 起動直後に、親ウィンドウに対して自身のウィンドウIDを通知する
    // (親ウィンドウはそれを受けて、子ウィンドウがpostMessageによる
    // 通信が可能な状態になったことを検知する)
    if (window.opener) {
      // TODO: 売り物に組み込むときは、オリジンを厳密に指定すること
      window.opener.postMessage(this.windowId, '*');
    }

    // ローカルストレージに自身のウィンドウIDを登録
    this.lStorageManager.addSubWindowId(this.windowId);

    // ウィンドウを閉じた際に、ローカルストレージから
    // 自身のウィンドウIDを削除するイベントを登録
    this.unloadSrc.subscribe(() => {
      this.lStorageManager.removeSubWindowId(this.windowId);
    });

    // postMessage受信イベントを登録
    // (今回、ウィンドウ間のやりとりはpostMessageを駆使して実現する)
    this.messageSrc.subscribe((e: any) => {
      try {
        const data = JSON.parse(e.data);

        // 「新規タブを開く」メッセージを受信した場合
        if (data.actionName === 'addNewTab') {
          const title = data.title;
          const path = data.path;
          this.tabsetManager.addNewTabIfNotExist(title, path);
        }

        // 「タブ選択」メッセージを受信した場合
        if (data.actionName === 'selectTab') {
          const title = data.title;
          this.tabsetManager.selectTab(title);
        }

        // 「閉じる」目セージを受信した場合
        // (今回は未使用)
        if (data.actionName === 'kill') {
          try {
            window.close();
          } catch (e) { }
        }

      } catch (e) { console.log(e); }
    });
  }
}
