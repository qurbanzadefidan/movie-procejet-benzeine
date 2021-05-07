// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const API_URL = 'https://ghibliapi.herokuapp.com';


export const environment = {
  URL: {
    production: false,
    PRODUCTS :                      API_URL              + '/films?limit=10',
    PRODUCT_DETAIL:                 API_URL              + '/films/:id',

  },
  production: false


};

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
