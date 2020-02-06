import axios from 'axios-token-interceptor';

// You can use any cookie library or whatever
// library to access your client storage.
import cookie from 'cookie-machine';

//import { authProvider } from 'authprovider';

//const token = await authProvider.getIdToken();
//const idToken = token.idToken.rawIdToken;

//const request = async url => {
//    const jwttoken = await authProvider.getAccessToken();
//}

axios.interceptors.request.use(function (config) {
    const token = jwttoken;

    if (token != null) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, function (err) {
    return Promise.reject(err);
});