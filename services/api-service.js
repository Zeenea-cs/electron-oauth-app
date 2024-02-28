const axios = require('axios');
const authService = require('./auth-service');
const envVariables = require("../env-variables.json");
const {apiIdentifier, auth0Domain, clientId, tenant} = envVariables;

async function getPrivateData() {
    const result = await axios.post('\n' +
        'https://' + tenant + '.zeenea.app/api/catalog/graphql', '{"query":"query{\\n  items(type:\\"dataset\\"){\\n    nodes{\\n      id\\n      name\\n    }\\n  }\\n}"}', {
        headers: {
            'Authorization': `Bearer ${authService.getAccessToken()}`,
            'Content-Type': 'application/json'
        },
    });
    return JSON.stringify(result.data);
}

module.exports = {
    getPrivateData,
}