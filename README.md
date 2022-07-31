# MBO用Laravelアプリ


## npmインストール後
ホストから `npm install && npm run dev` で起動

vite.config.jsに追記
~~~vite.config.js
    server: {
        host: 'localhost', 
    },
~~~

## 課題
- AWSのリソースに無駄が多い。
  - 「ひとまず成果物を公開をする」ことが最低限の目標だったため、環境の再現は簡単だったが実用可能なレベルとは言い難い。
  - 1台のAMI(仮想マシン)にDB, Web, App各サーバーが全部載せの状態。
  - せっかくDockerを導入しているので、コンテナはRCSで管理、Web、Appサーバーのコンテナ稼働はFargate、DBサーバーはRDSといった形でAWSの各種サービスに触れてみたかった。
- CI/CDがない。
  - GitHubにpushされたとき本番環境に自動デプロイされるようにしたい。

~~~