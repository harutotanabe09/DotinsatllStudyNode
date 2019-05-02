## Docker Start Node

Dockerで始めるNode環境構築

## How to Start

Dockerfileをビルド。ビルド名：my-nodejs-app

docker build -t my-nodejs-app-lesson .

ビルドしたDockerfileを実行。実行しているDokcerに入る —rm：実行後ビルド削除。

docker run -p 49160:8080 -it --rm --name my-running-app my-nodejs-app-lesson

起動後以下URLを実施

http://localhost:49160/

## Learning Text

Node - 大量のリクエスト高速にさばく。文法はJSと同じ。Apacheの進化版。

イベントループ（Node.js)：シングルスレッド。キューで処理を回す。スレッドを複数立ち上げない。ノンブロッキングを書かないと行けない。

JavaScript(フロントエンド)との違い　→　DOM操作不可

実行方法は２つ。①　コマンドラインからの実行 node　②　ファイルからの実行　node hello.js　

次の処理をブロックしない処理









