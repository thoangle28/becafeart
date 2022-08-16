const config = {
  server_info : {
    host: process.env.MYSQL_SERVER,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  },
  posts_per_page: 10  
}

module.exports = config