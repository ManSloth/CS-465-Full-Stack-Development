module.exports = {
    modelBaseDirectory: 'app_server/models',
    models: ['*.js', '!db.js'],
    data: 'app_server/data',
    db: 'mongodb://localhost:27017/travlr'
};
