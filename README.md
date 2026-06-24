# Daily English Log

# 概要
英語学習用Webアプリです。
単語の登録・削除・検索・学習状態管理ができます。
Laravel APIとNext.jsを用いたフルスタックで開発しました。

# 使用技術
## frontend
- Next.js 16.2.6
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4

## backend
- Laravel 13.8
- PHP 8.5.6
- MySQL 8.4

# 主な機能
- 単語の追加
- 単語の削除
- 単語の検索
- 学習状態管理

## 工夫した点
- Laravel API + Next.js の責務分離
- TypeScriptによる型安全性
- React state を用いたリアルタイムフィルター
- コンポーネント分割による保守性向上