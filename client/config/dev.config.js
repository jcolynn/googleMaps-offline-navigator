const SECRETS = require('../../config/secrets.json'); // nodejs will auto read json

module.exports = {
    GOOGLE_API_KEY: SECRETS.google_maps.api_key,
    APP_NAME: 'Map-e',
    API_SERVER: 'http://localhost:8081',
};
