module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/sam-massage'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
