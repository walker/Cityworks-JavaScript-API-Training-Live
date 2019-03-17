// create apiService Variable
var apiService;
var authService;

// define is a require.js function we are using it to access the sdk libraries
define(
    ['../cw-sdk/api/services/general/authenticationservice'],
    function (api) {

        //Create a new api service
        //use the passed in api to call ApiService, and pass in
        //our site's url so it knows where to call the api
        apiService = new api.ApiService("https://training.cityworks.com/cityworks");
        authService = new api.AuthenticationService(apiService);
    })

// binds to the Login button
function login() {

    // accesses the username and password inputs
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // this calls the login api to get a token requires username and password
    
        // ".then" catches the response object which contains the token
    
            // make sure that http response came back correctly

                // our token variable

                // save the token to localStorage

                // change pages
}