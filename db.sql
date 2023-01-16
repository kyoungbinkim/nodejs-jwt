DROP DATABASE IF EXISTS jwt_test;
CREATE DATABASE jwt_test;

USE jwt_test;

DROP TABLE IF EXISTS user;
CREATE TABLE user (
    idx int(11) unsigned NOT NULL AUTO_INCREMENT,
    id varchar(32) NOT NULL,
    pw varchar(32) NOT NULL,
    PRIMARY KEY (idx),
    UNIQUE (id)
);

USE mysql;
DROP user IF EXISTS 'jwt_usr'@'localhost';
create user IF NOT EXISTS 'jwt_usr'@'localhost' identified with mysql_native_password by 'jwt_usr123!';
FLUSH privileges;

GRANT ALL privileges ON `jwt_test`.* TO 'jwt_usr'@'localhost';

