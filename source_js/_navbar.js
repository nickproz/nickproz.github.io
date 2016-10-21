$(document).ready(function() {
    /* Menu Logic */
    var $menuLink = $('.nav-link-container');
    var currentNavLinkClass = 'nav-active';
    var navLinks = ['#top', '#about', '#work', '#expertise', '#connect'];

    /* Strips out hashes that are not menu items, and makes the hash home if no hash is set */
    var resetHash = function() {
        var hash = window.location.hash;
        if(hash === '' || navLinks.indexOf(hash) === -1) {
            window.location.hash = 'top';
        }
    };

    /* Updates the active link in our menu. Finds the <a> tag corresponding to the hash and adds the active class to its parent */
    var updateMenu = function() {
        var hash = window.location.hash;
        if(navLinks.indexOf(hash) >= 0) {
            $menuLink.removeClass(currentNavLinkClass);
            var linkQuery = "a[href='" + hash + "']";
            $(linkQuery).parent().addClass(currentNavLinkClass);
        }
    };

    /* Listener for a hash change, updates our menu */
    var hashListener = function() {
        $(window).on('hashchange', function() {
            updateMenu();
        });
    };

    /* Initialize our menu by updating our menu and calling our listener */
    var initMenu = function() {
        resetHash();
        updateMenu();
        hashListener();
    };

    initMenu();
});
