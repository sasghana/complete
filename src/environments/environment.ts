// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  firebase: {
    apiKey: 'AIzaSyDuvWG_3Ti64yKEuwc8i_c1X_peATm8Tv8',
    authDomain: 'db-firebase-5cf99.firebaseapp.com',
    databaseURL: 'https://db-firebase-5cf99.firebaseio.com',
    projectId: 'db-firebase-5cf99',
    storageBucket: 'db-firebase-5cf99.appspot.com',
    messagingSenderId: '980497524939'
  },
  localhost: 'http://localhost:3000',
  production: false
};
