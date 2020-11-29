let env = process.env.NODE_ENV || 'development';
console.log(env);

if (env === 'development') {
  module.exports = {
    username: 'comparto_libros',
    password: 'comparto_libros',
    database: 'comparto_libros',
    host: 'db-comparto-libros',
    dialect: 'postgres',
    POSTGRES_PORT : 5432,
    MAILER_PROVIDER: '',
    MAILER_ID: '',
    MAILER_PWD: '',
    JWT_KEY: 'development'
  };
}