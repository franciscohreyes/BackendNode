const config = {
  dbUrl: process.env.DB_URL || 'mongodb+srv://<DB_USER>:<DB_PASS>@cluster0-nkkgv.mongodb.net/<DB_NAME>?retryWrites=true&w=majority',
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'http://localhost',
  publicRoute: process.env.PUBLIC_ROUTE || 'app',
  filesRoute: process.env.FILES_ROUTE || 'files'
};

module.exports = config;