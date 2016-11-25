/* config  */

module.exports = {
    redis: {
        host: '172.16.0.32',
        port: 6379,
        db: 10
    },
    orm: {
        database: "local",
        protocol: "mysql",
        host: "127.0.0.1",
        user: "root",
        password: "ljy2996892A",
        query: {pool: true, debug: false}
    }
}
