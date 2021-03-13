const fs = require('fs')

module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync('./certs/server.key'),
      cert: fs.readFileSync('./certs/server.crt'),
    },
    public: 'https://localhost:8080/'
  }
}
