const app = angular.module('emmaPage', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'test.html'
        })
        .when("/home", {
            templateUrl: 'test.html'
        })
        .when("/loggedIn", {
            templateUrl: 'loggedIn.html'
        })


});

app.controller('efoNI', function ($scope) {
    let initUser = netlifyIdentity.currentUser();
    netlifyIdentity.on('init', () => {
        initUser = netlifyIdentity.currentUser();
    });

    netlifyIdentity.on('login', () => {
        if (initUser == null) {
            window.location.replace('#!loggedIn');
        }
        netlifyIdentity.close();
    });

    netlifyIdentity.on('logout', () => {
        netlifyIdentity.close();
        window.location.replace('/');
    });

});
