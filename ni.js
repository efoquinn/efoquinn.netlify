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