# ToDoアプリ要件定義書

## 機能要件一覧

| ID   | 要件内容                                                                 |
|------|-------------------------------------------------------------------------|
| F01  | ユーザーは新しいタスクを作成できる                                      |
| F02  | ユーザーは既存のタスクを編集できる                                      |
| F03  | ユーザーは不要なタスクを削除できる                                      |
| F04  | ユーザーはタスクを完了としてマークできる                                |
| F05  | ユーザーは全てのタスクを一覧で表示できる                                |
| F06  | ユーザーはタスクをカテゴリに分けて整理できる                            |
| F07  | ユーザーはタスクに優先度を設定できる（高・中・低）                      |
| F08  | ユーザーはタスクに期限を設定できる                                      |

---

## Mermaid図（機能関連図）

```mermaid
graph TD
	user -- F01_新規作成 --> task
	user -- F02_編集 --> task
	user -- F03_削除 --> task
	user -- F04_完了マーク --> task
	user -- F05_一覧表示 --> task_list
	user -- F06_カテゴリ分け --> category
	user -- F07_優先度設定 --> priority
	user -- F08_期限設定 --> deadline

	task_list -- タスクを含む --> task
	task -- 所属カテゴリ --> category
	task -- 優先度 --> priority
	task -- 期限 --> deadline
```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
