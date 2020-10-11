# scroll-percentager
指定した領域のうち、何%スクロールしているかを測るライブラリです。

## インストールの方法
### npm
```
npm install scroll-percentager
```

## 使い方
bind関数をインポートします。

```
import { bind } from 'scroll-percentager'
```

第一引数に、スクロールする要素のidを指定します。
bind後、`getCurrentPercentage()`を呼ぶことで要素内でのスクロールパーセンテージを取得できます。

## ライセンス
MIT