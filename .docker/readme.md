Dockerでの環境構築について

サービス立ち上げ（docker-compose up -d コマンド）の後に以下を実施

ローカル端末のCLIでコマンド実行
docker-compose exec php bash

Laravelアプリケーション、JSライブラリ各種インストール
```bash
composer install
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
composer dump-autoload
npm install
```

DB初期化
```bash
php artisan migrate:fresh
php artisan db:seed
```

Laravelアプリケーションでのファイル更新があるディレクトリのパーミッション変更
```
chmod -R 777 ./storage/
```

※入力補助を有効にするため、ホストマシン内でもこのコマンドを実行すること
```
composer install
npm install
```