import { Injectable } from '@angular/core';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageManagementService {

  constructor() { }

  /**
   * ローカルストレージの格納情報に基づき、
   * 現在開かれている子ウィンドウIDの識別子の配列を取得します。
   */
  getSubWindowIdList(): string[] {
    return JSON.parse(
      window.localStorage.getItem(
        Constants.lStorageKey.windowIdList)) || [];
  }

  /**
   * ローカルストレージの格納情報に基づき、
   * 指定したタブ識別子を持つ子ウィンドウIDを取得します。
   * 子ウィンドウが存在しない場合は null を返します。
   * @param functionId タブ識別子
   */
  findWindow(functionId: string) {
    const windowIdList = this.getSubWindowIdList();
    for (const windowId of windowIdList) {
      const funcIdList = this.getFunctionIdList(windowId);
      if (!(funcIdList.indexOf(functionId) < 0)) {
        return windowId;
      }
    }
    return null;
  }

  /**
   * ローカルストレージの格納情報に基づき、
   * 指定したウィンドウ内で開かれているタブ識別子のリストを取得します。
   * @param windowId 子ウィンドウID
   */
  getFunctionIdList(windowId?: string): string[] {
    return JSON.parse(
      window.localStorage.getItem(windowId || window.name)) || [];
  }

  /**
   * ローカルストレージ情報を更新します。
   * 自ウィンドウに対して、指定したタブ識別子を追加します。
   * @param id タブ識別子
   */
  addFunctionId(id: string) {
    const functionIdList = this.getFunctionIdList();
    functionIdList.push(id);
    window.localStorage.setItem(
      window.name,
      JSON.stringify(functionIdList));
  }

  /**
   * ローカルストレージ情報を更新します。
   * 自ウィンドウから、指定したタブ識別子を削除します。
   * @param id タブ識別子
   */
  removeFunctionId(id: string) {
    if (!id) { return; }
    window.localStorage.setItem(
      window.name,
      JSON.stringify(
        this.getFunctionIdList()
          .filter(el => el !== id)));
  }

  /**
   * ローカルストレージ情報を更新します。
   * 指定した子ウィンドウIDを追加します。
   * @param id 子ウィンドウID
   */
  addSubWindowId(id: string) {
    if (!id) { return; }
    const windowIdList = this.getSubWindowIdList();
    windowIdList.push(id);
    window.localStorage.setItem(
      Constants.lStorageKey.windowIdList,
      JSON.stringify(windowIdList));
  }

  /**
   * ローカルストレージ情報を更新します。
   * 指定した子ウィンドウIDを削除します。
   * @param id 子ウィンドウID
   */
  removeSubWindowId(id: string) {
    if (!id) { return; }
    window.localStorage.setItem(
      Constants.lStorageKey.windowIdList,
      JSON.stringify(
        this.getSubWindowIdList()
          .filter(el => el !== id)));
    window.localStorage.removeItem(window.name);
  }
}
