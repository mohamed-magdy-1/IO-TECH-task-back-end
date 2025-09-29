// module.exports = ({ env }) => ({
//   host: '0.0.0.0',
//   port: env.int('PORT', 1337),
//   proxy: true,
//   url: env('PUBLIC_URL', 'https://io-tech-task-back-end.onrender.com/'),
  
//   app: {
//     keys: [
//       env('APP_KEY_1', 'someRandomKey1'),
//       env('APP_KEY_2', 'someRandomKey2'),
//       env('APP_KEY_3', 'someRandomKey3'),
//       env('APP_KEY_4', 'someRandomKey4'),
//     ],
//   },

//   admin: {
//     auth: {
//       secret: env('ADMIN_JWT_SECRET', 'someSecretKey'),
//       session: {
//         secure: true,
//       },
//     },
//   },
// });
module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: env.int('PORT', 1337),
  proxy: true,
  url: env('PUBLIC_URL', 'http://localhost:1337/'),

  app: {
    keys: [
      env('APP_KEY_1', 'fallback_key_1'),
      env('APP_KEY_2', 'fallback_key_2'),
      env('APP_KEY_3', 'fallback_key_3'),
      env('APP_KEY_4', 'fallback_key_4'),
    ],
  },

  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'someSecretKey'),
      session: {
      
        secure: false,
      },
    },
  },
});
