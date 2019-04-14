import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'がんばってタブっぽい挙動を再現してみるチャレンジ';

  constructor(
    private router: Router,
    titleService: Title) {

    // タイトルを設定
    titleService.setTitle(this.title);
  }

  // gh-pagesにホスティングした際にAngularのルータが動かなくなる現象への対処
  // 参考: http://neos21.hatenablog.com/entry/2018/08/16/080000
  ngOnInit() {
    if (environment.production) {

      // SessionStorage より 404.html からの遷移元 URL 情報を取得する
      const redirectUrl = sessionStorage.redirect;

      // SessionStorage の情報は削除しておく
      delete sessionStorage.redirect;

      // 遷移元 URL が取得できていた場合 (もしトップページの URL が取得できた場合は移動する必要ないので無視)
      if (redirectUrl && redirectUrl !== location.href) {

        // ハッシュやパラメータ「#」「?」「;」を除去する : ココはアプリの要件に応じて、ハッシュやパラメータを別途再現するために抽出して処理分けする
        const pureUrl = redirectUrl.split(/#|\?|;/)[0];

        // アドレスバーの URL (履歴) を修正する
        window.history.replaceState(null, null, pureUrl);

        // ドメイン・アプリルート部分を削除する → 配下のパス文字列だけが残る
        const navigateUrl = pureUrl.replace(/http.*:\/\/.*\/advanced-potato/, '');

        // パス文字列を渡して遷移する
        this.router.navigate([navigateUrl])
          .catch(() => {
            // 遷移エラー時 (受け取った URL が不正だった場合など) は仕方ないのでトップページに遷移する
            this.router.navigate(['']);
          });
      }
    }
  }
}
