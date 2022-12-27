/*var request = require("request");

var options = { method: 'POST',
  url: 'https://kpi.eu.auth0.com/oauth/token',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  form:
   { client_id: 'JIvCO5c2IBHlAe2patn6l6q5H35qxti0',
     client_secret: 'ZRF8Op0tWM36p1_hxXTU-B0K_Gq_-eAVtlrQpY24CasYiDmcXBhNS6IJMNcz1EgB',
     audience: 'https://kpi.eu.auth0.com/api/v2/',
     grant_type: 'client_credentials' }
   };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});*/


const {json} = require("body-parser");
var request = require("request");

var options = { method: 'POST',
  url: 'https://kpi.eu.auth0.com/api/v2/users',
  headers: { 
    'content-type': 'application/json',
    'Authorization' : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjVCZTlBZFhrMERaUjhmR1dZYjdkViJ9.eyJpc3MiOiJodHRwczovL2twaS5ldS5hdXRoMC5jb20vIiwic3ViIjoiSkl2Q081YzJJQkhsQWUycGF0bjZsNnE1SDM1cXh0aTBAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8va3BpLmV1LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjY5NDg1MzY3LCJleHAiOjE2Njk1NzE3NjcsImF6cCI6IkpJdkNPNWMySUJIbEFlMnBhdG42bDZxNUgzNXF4dGkwIiwic2NvcGUiOiJyZWFkOnVzZXJzIGNyZWF0ZTp1c2VycyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.hgVIQQowmoIqkUrw49LDrC09mYrHdN2wgMVKsozsdKzcWDm8F47CM6hLTO9ibrES-NsYBi-vAYN9HDXJPJzZ1FUBTYzd2M1UvyRTBU2J3u6TwBTxeg-NnakEOVnTdcOCCUwsMuJoj7dKFnfoSVmNcHkrqGU96W1U0lfUR-u1h4lpq8zKx1IL0YfkrkV0JOUulfkmKpcibQ17U9v0JOiFz3gyfqlVWSJkkNKOebscobNvSdOjdRKbu8XOfDiuGS9v7E0eNnFmYm2UPyAzo5D7jIYXZkQ1oOU3O_hmQFE4d6_fBz8caGXbpJ1N--XbXkhomnk9KzGvCQP3ANRIBLRVwg"
   },
   body: JSON.stringify({
    "email": "john.doe10@gmail.com",
    "user_metadata": {},
    "blocked": false,
    "email_verified": false,
    "app_metadata": {},
    "given_name": "John",
    "family_name": "Doe",
    "name": "John Doe",
    "nickname": "JohnnyDdd",
    "picture": "https://secure.gravatar.com/avatar/15626c5e0c749cb912f9d1ad48dba440?s=480&r=pg&d=https%3A%2F%2Fssl.gstatic.com%2Fs2%2Fprofiles%2Fimages%2Fsilhouette80.png",
    "user_id": "TestUserId1234",
    "connection": "Username-Password-Authentication",
    "password": "Pass1234H!I",
    "verify_email": false,
  }) };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});