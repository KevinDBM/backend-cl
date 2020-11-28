let env = process.env.NODE_ENV || 'development';
console.log(env);

if (env === 'development') {
  module.exports = {
    POSTGRES_DATABASE: 'comparto_libros',
    POSTGRES_USERNAME: 'comparto_libros',
    POSTGRES_PASSWORD: 'comparto_libros',
    POSTGRES_PORT : 5432,
    POSTGRES_HOST: 'db-comparto-libros',
    MAILER_PROVIDER: '',
    MAILER_ID: '',
    MAILER_PWD: '',
    JWT_KEY: ''
  };
}