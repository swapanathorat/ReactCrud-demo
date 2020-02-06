import { MsalAuthProvider, LoginType } from 'react-aad-msal';

//MSAL Configurations
const configAdal = {
    auth: {
        clientId: '6ff4a164-572b-49dc-b20a-d2ba0c07e129',
        authority: 'https://login.microsoftonline.com/common'
        
    },
    cache: {
        cacheLocation: "localStorage" ,
        storeAuthStateInCookie: true
    }
};

const authenticationParameters = {
    scopes: ['https://graph.microsoft.com/.default']
 }

//Options
const options = {
    loginType: LoginType.Redirect,
    // When a token is refreshed it will be done by loading a page in an iframe.
    // Rather than reloading the same page, we can point to an empty html file which will prevent
    // site resources from being loaded twice.
    tokenRefreshUri: window.location.origin + "/auth.html"
}

export const authProvider = new MsalAuthProvider( configAdal , authenticationParameters, options)