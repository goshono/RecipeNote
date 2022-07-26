FROM php:8.1-fpm-buster

ENV COMPOSER_ALLOW_SUPERUSER=1\
  COMPOSER_HOME=/composer

COPY --from=composer:2.2 /usr/bin/composer /usr/bin/composer

RUN apt-get update && \
  # Laravelに必要なパッケージをインストール
  apt-get -y install --no-install-recommends git unzip libzip-dev libicu-dev libonig-dev libpq-dev && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/* && \
  # phpの拡張ライブラリインストール
  docker-php-ext-install intl pdo_pgsql zip bcmath

COPY ./php.ini /usr/local/etc/php/php.ini

WORKDIR /data
