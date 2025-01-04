# ベースイメージの指定
FROM php:8.2-fpm
EXPOSE 5173

# 作成した設定ファイルをコンテナ内にコピー
COPY ./.docker/php/php.ini /usr/local/etc/php/php.ini
COPY ./.env.example /var/www/html/.env

# パッケージのインストール
RUN apt update \
    && apt -y install git zip unzip vim npm nodejs libfreetype6-dev libjpeg62-turbo-dev libpng-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd

RUN docker-php-ext-install pdo_mysql

# root でのインストールで警告が起こらないよう設定後、composer のインストール
RUN cd /usr/bin && curl -s http://getcomposer.org/installer | php && ln -s /usr/bin/composer.phar /usr/bin/composer

# コンテナ内で作業する際のカレントディレクトリの指定
WORKDIR /var/www/html