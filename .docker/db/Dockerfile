# ベースイメージの指定
FROM mysql:8.4

# 作成した設定ファイルをコンテナ内にコピー
COPY ./.docker/db/my.conf /etc/my.conf
# COPY ./.docker/db/init.sql /docker-entrypoint-initdb.d/

CMD ["mysqld"]