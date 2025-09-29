const fs = require('fs');
const path = require('path');

console.log('CA path:', path.join(__dirname, 'certs/ca.pem'));
console.log('Exists:', fs.existsSync(path.join(__dirname, 'certs/ca.pem')));

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'sqlite');

  const useSSL = env.bool('DATABASE_SSL', false);
  const useCA = env.bool('DATABASE_USE_CA', false);

let ssl = false;
if (useSSL) {
  ssl = useCA
    ? {
        rejectUnauthorized: true,
        ca: fs.readFileSync(path.join(__dirname, 'certs/ca.pem'), 'utf8'),
      }
    : { rejectUnauthorized: false };
}


  const connection =
    client === 'sqlite'
      ? {
          filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
        }
      : {
          connectionString: env('DATABASE_URL'),
          ssl,
          schema: env('DATABASE_SCHEMA', 'public'),
        };

  return {
    connection: {
      client,
      connection,
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
      pool: {
        min: env.int('DATABASE_POOL_MIN', 2),
        max: env.int('DATABASE_POOL_MAX', 10),
      },
    },
  };
};

