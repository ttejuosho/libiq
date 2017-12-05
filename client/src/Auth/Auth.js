import Auth0 from 'auth0-js';

const AUTH0_CONNECTION = 'Username-Password-Authentication';
const AUTH0_DOMAIN = AUTH_CONFIG.domain;
const AUTH0_CLIENT_ID = AUTH_CONFIG.clientId;
const AUTH0_CALLBACK_URL = 'http://localhost:3000';
const SCOPE = 'openid name email nickname';

var auth0 = new Auth0({
  domain:       AUTH0_DOMAIN,
  clientID:     AUTH0_CLIENT_ID,
  callbackURL:  AUTH0_CALLBACK_URL,
  callbackOnLocationHash: true
});

export function login(username, password, callback) {
  auth0.login({
    connection: AUTH0_CONNECTION,
    username:   username,
    password:   password,
    scope:      SCOPE
  }, function(err, profile, id_token, access_token, state) {
      if (err) {
        return callback(err);
      }

      localStorage.setItem('userToken', id_token);
      return callback(null, id_token);
    });
}


export function parseLogin() {
  var hash = auth0.parseHash(window.location.hash);
  if (hash && hash.id_token) {
    localStorage.setItem('userToken', hash.id_token);

    return hash.id_token;
  }

  return null;
}
