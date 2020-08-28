module.exports =  {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'bhut_cars',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}; 