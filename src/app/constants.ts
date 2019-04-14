import { environment } from 'src/environments/environment';

export class Constants {

  /** タブ用の識別子（既存タブがあるかどうかの判別に使用） */
  static readonly functionId = {
    page1: 'Page 1',
    page2: 'Page 2',
    page3: 'Page 3'
  };

  /** ローカルストレージのキー */
  static readonly lStorageKey = {
    // 開かれているウィンドウの識別子の配列のキー
    windowIdList: 'WINDOW_ID_LIST'
  };

  /** 子ウィンドウのサイズ */
  static readonly subWindowSize = {
    width: 640,
    height: 480
  };

  /** タブコンテナコンポーネントのパス */
  static readonly tabContainerPath = `${environment.baseHref}/tab`;

  /** 子ウィンドウのオプション文字列 */
  static readonly subWindowOpenOptions = `width=${Constants.subWindowSize.width},height=${Constants.subWindowSize.height}`;
}
