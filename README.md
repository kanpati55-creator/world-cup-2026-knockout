# 2026 W杯 決勝トーナメント速報

2026年W杯サッカー決勝トーナメントの試合予定と結果を確認・更新するための静的Webアプリです。
2026年6月28日時点で確認できる決勝トーナメント進出チームを初期データに反映しています。

## 使い方

`index.html` をダブルクリックするとブラウザーで開けます。

家族に共有する場合は、GitHub Pagesで公開できます。詳しい手順は `docs/github-pages-setup.md` を見てください。

主な機能は次の通りです。

- 決勝トーナメント32試合の一覧表示
- 現地時間と日本時間の併記
- ラウンド別、状態別の絞り込み
- 勝者ルートが色付きになる簡易トーナメント表
- 手動で得点、状態、勝者、メモを更新
- JSONの読み込み・書き出し
- API URLとAPIキーを設定して自動更新

## API更新について

無料で安定した公式の完全リアルタイムAPIは一般公開されていないことが多いため、このアプリは次の2形式に対応しています。

- `API-Football`: `https://v3.football.api-sports.io/fixtures?league=1&season=2026` のような形式
- `汎用JSON`: `matches` 配列を返す任意のJSON

APIキーは保存ボタンを押しても `localStorage` には保存せず、ブラウザーのセッション内だけに保持します。

参考リンク:

- FIFA公式大会ページ: https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026
- API-Football documentation: https://www.api-football.com/documentation-v3

## 汎用JSONの例

```json
{
  "matches": [
    {
      "matchNo": 104,
      "roundKey": "final",
      "date": "2026-07-19",
      "time": "18:00",
      "venue": "New York New Jersey Stadium",
      "home": "チームA",
      "away": "チームB",
      "scoreHome": 2,
      "scoreAway": 1,
      "status": "finished",
      "winner": "home",
      "note": "延長"
    }
  ]
}
```

## ファイル

- `index.html`: 画面構成
- `styles.css`: 見た目
- `app.js`: データ、表示、API更新、手動更新

初期データは2026年6月28日時点のRound of 32組み合わせを反映しています。実運用では、APIまたはJSON読み込みで最新データに更新してください。
