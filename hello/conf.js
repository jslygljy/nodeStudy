/* config  */

module.exports = {
    redis: {
        host: '172.16.0.32',
        port: 6379,
        db: 10
    },
    orm: {
        database: "squarelife",
        protocol: "mysql",
        host: "118.178.224.171",
        user: "root",
        password: "123456",
        query: {pool: true, debug: false}
    }
}