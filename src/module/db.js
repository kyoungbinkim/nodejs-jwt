import mysql from 'mysql';

const mysqlConfig = {
    host    : 'localhost',
    user    : 'jwt_usr',
    password: 'jwt_usr123!',
    database: 'jwt_test',
};

export const connection = mysql.createConnection(mysqlConfig);

export const joinQuery = (id, pw, callback) => {
    
    connection.query(
        `INSERT INTO user (id ,pw) VALUES ('${id}', '${pw}')`,
        (err, result) => {
            if(err) {
                console.log(err);
                callback(false);
                return;
            }
            console.log(result, err);
            callback(true);
        }
    )
}

export const loginQuery = (id, pw, callback) => {
    try {
        connection.query(
            `SELECT pw FROM user where id=?`, [`${id}`], (err, row) => {
                if(err) { callback(false) }
                else {
                    console.log(row);
                    callback(row[0].pw === pw)
                }
            }
        )
    } catch (error) {
        callback(false);
    }
}

export const getUserListQuery = (callback) => {
    try {
        connection.query(
            `select id from user`, (err, row) => {
                if(err) return callback(err);
                callback(row);
            }
        )
    } catch (error) {
        callback(-1);
    }
}