module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USERNAME'),
      password: env('DATABASE_PASSWORD'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: env.bool('DATABASE_SSL', false) ? { rejectUnauthorized: false } : false, // Conditional SSL
    },
    debug: false,
  },
});
