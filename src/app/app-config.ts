import { Configuration } from 'msal';
import { MsalAngularConfiguration } from '@azure/msal-angular';
import { environment } from "../environments/environment";

// this checks if the app is running on IE
export const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

/** =================== REGIONS ====================
 * 1) B2C policies and user flows
 * 2) Web API configuration parameters
 * 3) Authentication configuration parameters
 * 4) MSAL-Angular specific configuration parameters
 * =================================================
 */

// #region 1) B2C policies and user flows
/**
 * Enter here the user flows and custom policies for your B2C application,
 * To learn more about user flows, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
    names: {
        signUpSignIn: 'B2C_1_signinsignup',
        resetPassword: 'b2c_1_reset',
        editProfile: 'b2c_1_edit_profile',
    },
    authorities: {
        signUpSignIn: {
            authority: 'https://skillassuretraining.b2clogin.com/skillassuretraining.onmicrosoft.com/B2C_1_signinsignup',

        },
        resetPassword: {
            authority: 'https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_reset',
        },
        editProfile: {
            authority: 'https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_edit_profile',
        },
    },
};
// #endregion


// #region 2) Web API Configuration
/**
 * Enter here the coordinates of your Web API and scopes for access token request
 * The current application coordinates were pre-registered in a B2C tenant.
 */
export const apiConfig: {b2cScopes: string[]; webApi: string} = {
    b2cScopes: ['https://skillassuretraining.onmicrosoft.com/api/cmd.Read'],
    webApi: 'https://azure.get2aha.pratian.com/azure',//environment.azure_webApi,
};
// #endregion



// #region 3) Authentication Configuration
/**
 * Config object to be passed to Msal on creation. For a full list of msal.js configuration parameters,
 * visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_configuration_.html
 */
export const msalConfig: Configuration = {
    auth: {
        clientId: '1043c37f-e033-462f-b91f-b7e8f9eeb38a',
        authority: b2cPolicies.authorities.signUpSignIn.authority,
        redirectUri: 'https://petzey.learn.skillassure.com/dashboard/allAppointment',//environment.azure_login,
         //redirectUri:'http://localhost:4200/dashboard/allAppointment',
        postLogoutRedirectUri: 'https://petzey.learn.skillassure.com/',//environment.azure_logout,
        // postLogoutRedirectUri:'http://localhost:4200/',
        navigateToLoginRequestUrl: false,
        validateAuthority: false,
      },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: isIE, // Set this to 'true' to save cache in cookies to address trusted zones limitations in IE
    },
};

/**
 * Scopes you enter here will be consented once you authenticate. For a full list of available authentication parameters,
 * visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
 */
export const loginRequest: {scopes: string[]} = {
    scopes: ['openid', 'profile'],
};

// Scopes you enter will be used for the access token request for your web API
export const tokenRequest: {scopes: string[]} = {
    scopes: apiConfig.b2cScopes, // i.e. [https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read]
};
// #endregion



// #region 4) MSAL-Angular Configuration
// here you can define the coordinates and required permissions for your protected resources
export const protectedResourceMap: [string, string[]][] = [
    [apiConfig.webApi, apiConfig.b2cScopes],
    // i.e. [https://fabrikamb2chello.azurewebsites.net/hello, ['https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read']]
];

/**
 * MSAL-Angular specific authentication parameters. For a full list of available options,
 * visit https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-angular#config-options-for-msal-initialization
 */
export const msalAngularConfig: MsalAngularConfiguration = {
    popUp: !isIE,
    consentScopes: [
        ...loginRequest.scopes,
        ...tokenRequest.scopes,
    ],
    unprotectedResources: [], // API calls to these coordinates will NOT activate MSALGuard
    protectedResourceMap,     // API calls to these coordinates will activate MSALGuard
    extraQueryParameters: {},
};
// #endregion
