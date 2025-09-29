

module.exports = ({ env }) => ({
  host: '0.0.0.0', // مهم عشان Render يقدر يشوف السيرفر
  port: env.int('PORT', 1337), // Render هيبعت PORT=10000 غالباً
  app: {
    keys: env.array('APP_KEYS', ['defaultKey1', 'defaultKey2']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  cors: {
    enabled: true,
    origin: [
      'https://swordmanhwa.site',
      'https://www.swordmanhwa.site',
    ],
    headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  },
});

