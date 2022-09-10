module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "MySqlz777@!",
    DB: "expseqnode_db",
    dialect: "mysql",

    pool: {
        max: 5, //# of connections
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}