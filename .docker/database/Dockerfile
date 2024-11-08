FROM mariadb:11.4.3

VOLUME /var/lib/mysql

COPY ./healthcheck.sh /usr/local/bin/
COPY ./docker-entrypoint.sh /usr/local/bin/

RUN chmod +x /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/healthcheck.sh

ENTRYPOINT ["docker-entrypoint.sh"]


EXPOSE 3306
CMD ["mariadbd"]