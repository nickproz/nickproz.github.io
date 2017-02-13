/*
-------------------------------------------
|               Navbar Logic              |
-------------------------------------------
*/
$(document).ready(function() {
    /*
    ----------------------------------------
    |               Variables              |
    ----------------------------------------
    */

    /**
     * JQuery Nodes
     * @type {*}
     */
    let $navLink = $('.nav-link-container');

    /**
     * Selectors and Classes
     * @type {string}
     */
    let activeNavLinkClass = 'nav-active';
    let fadeInBlockSelector = '.fade-in-block';
    let navLinks = ['#top', '#about', '#work', '#connect'];

    /*
     ----------------------------------------
     |               Functions              |
     ----------------------------------------
     */

    /**
     * Checks to see if the window hash is nothing or not one of our navLinks.
     * If it is not, we reset it to our 'home' section ('top').
     */
    let resetHash = function() {
        let hash = window.location.hash;
        if(hash === '' || navLinks.indexOf(hash) === -1) {
            window.location.hash = 'top';
        }
    };

    /**
     * Updates our menu by updating the active nav link item and fading in the corresponding blocks.
     *
     * @param nextIndex - If this function is called within the full page plugin, the nextIndex
     *                    is the section we are moving to, so use that instead of the hash.
     */
    let updateMenu = function(nextIndex) {
        let hash;
        // If a slide next index is provided, use that, otherwise, grab the hash
        if(nextIndex) {
            hash = navLinks[nextIndex-1];
        } else {
            hash = window.location.hash;
        }
        updateNavActiveItem(hash);
        fadeInBlocks(hash);
    };

    /**
     * Updates the active link in our menu.
     * Finds the <a> tag corresponding to the hash and adds the active class to its parent.
     *
     * @param hash - The hash of the menu section we are navigating to.
     */
    let updateNavActiveItem = function(hash) {
        if(navLinks.indexOf(hash) >= 0) {
            $navLink.removeClass(activeNavLinkClass);
            let linkQuery = "a[href='" + hash + "']";
            $(linkQuery).parent().addClass(activeNavLinkClass);
        }
    };

    /**
     * Fade in each block in the current navigation section.
     *
     * @param hash - The hash of the menu section we are navigating to.
     */
    let fadeInBlocks = function(hash) {
        // Change our hash into a corresponding class and query for all blocks within the hash section
        let $domNode = $(hash.replace("#", "."));
        let $blocks = $domNode.find(fadeInBlockSelector);

        // Only attempt to animate the blocks if they have an opacity of 0 (coming into view for the first time)
        if($blocks.length > 0 && $($blocks[0]).css("opacity") === "0") {
            $blocks.each(function(i){
                $(this).delay(300*i).animate({'opacity':'1'},1000);
            });
        }
    };

    /**
     * Listener for a hash change, updates our menu.
     */
    let hashListener = function() {
        $(window).on('hashchange', function() {
            updateMenu();
        });
    };

    /**
     * Initialize our menu by resetting our hash if necessary, updating our menu, and calling our hash listener.
     */
    (function() {
        resetHash();
        updateMenu();
        hashListener();
    })();

    /**
     * Full Page Plugin Settings.
     */
	$('#fullpage').fullpage({
		anchors: ['top', 'about', 'work', 'connect'],
		menu: '#menu',
		fixedElements: '',
		verticalCentered: false
        // Comment the following two lines out for auto scroll to be disabled
		,autoScrolling: false,
        onLeave: function(index, nextIndex){
			updateMenu(nextIndex);
        }
	});
});
