const app = angular.module('emmaPage', ['ngRoute']);

netlifyIdentity.on('init', () => {
    initUser = netlifyIdentity.currentUser();
});

netlifyIdentity.on('login', () => {
    if (initUser == null) {
        window.location.replace('loggedIn');
    }
    netlifyIdentity.close();
});

netlifyIdentity.on('logout', () => {
    netlifyIdentity.close();
    window.location.replace('/');
});


app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'index.html'
        })
        .when("/home", {
            templateUrl: 'index.html'
        })
        .when("/loggedIn", {
            templateUrl: 'loggedIn.html'
        })
        .when("/cats", {
            templateUrl: 'cats.html'
        })
        .when("/dogs", {
            templateUrl: 'dogs.html'
        });


})
app.controller('efoNI', function () {
   
});