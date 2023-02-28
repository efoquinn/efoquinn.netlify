netlifyIdentity.on('init', () =>{
    initUser = netlifyIdentity.currentUser();
});

netlifyIdentity.on('login', () =>{
    if (initUser == null) {
        window.location.replace('loggedIn');
    }
    netlifyIdentity.close();
});

netlifyIdentity.on('logout', () => {
    netlifyIdentity.close();
    window.location.replace('/');
});

const app = angular.module('emmaPage', ['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: 'index.html'
    })
    .when("/home", {
        templateUrl: 'index.html'
    })
    .when("/cats", {
        templateUrl: 'cats.html'
    })
    .when("/dogs", {
        templateUrl: 'dogs.html'
    })

app.controller('efoNI', function())

    });