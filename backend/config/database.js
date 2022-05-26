// LOCAL

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', '127.0.0.1'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'the_comic_swap'),
//       user: env('DATABASE_USERNAME', ''),
//       password: env('DATABASE_PASSWORD', ''),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });


module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'fanny.db.elephantsql.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'oqymwnyb'),
      user: env('DATABASE_USERNAME', 'oqymwnyb'),
      password: env('DATABASE_PASSWORD', '46JIn61L9eHtwI00Fsu3wGxxT1e8R2cT'),
      ssl: env.bool('DATABASE_SSL', true),
    },
    pool: {
      max: 5
    }
  },
});



// FOR ELEPHANTSQL

// module.exports = ({ env }) => ({
// connection: {
// pool: {
//   max: 5,
// }
// client: 'postgres',
// connection: {
//       host: env('DATABASE_HOST', 'fanny.db.elephantsql.com'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'oqymwnyb'),
//       user: env('DATABASE_USERNAME', 'oqymwnyb'),
//       password: env('DATABASE_PASSWORD', '46JIn61L9eHtwI00Fsu3wGxxT1e8R2cT'),
//       ssl: env.bool('DATABASE_SSL', true),
//     },
//   },
// });
