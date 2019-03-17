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
    let data = {
        LoginName:username,
        Password:password
    };

    // this calls the login api to get a token requires username and password
    authService.Authenticate(data).then(function(response)
    {
        if (response.Status === 0){
            let token = response.Value.Token;
            localStorage.setItem('token',token)
            window.location = "example.html";
        }
        else {
            alert('you need proper credentials');
        }
    })
}