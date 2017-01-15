// Menu Logic
$(document).ready(function() {
    // Variables
    // --------------------------------------------------
    // JQuery nodes
    var $nav = $('.navigation');
    var $navLink = $('.nav-link-container');

    // Other variables
    var activeNavLinkClass = 'nav-active';
    var fadeInBlockSelector = '.fade-in-block';
    var navLinks = ['#top', '#about', '#work', '#connect'];

    // Functions
    // --------------------------------------------------
    // Strips out hashes that are not menu items, and makes the hash home if no hash is set
    var resetHash = function() {
        var hash = window.location.hash;
        if(hash === '' || navLinks.indexOf(hash) === -1) {
            window.location.hash = 'top';
        }
    };

    // Updates our menu by updating the active nav link item and updating the opacity
    // of our navbar based on where on the page we are.
    var updateMenu = function(nextIndex) {
        var hash;
        // If a slide next index is provided, use that, otherwise, grab the hash
        if(nextIndex) {
            hash = navLinks[nextIndex-1];
        } else {
            hash = window.location.hash;
        }
        updateNavActiveItem(hash);
        //updateNavOpacity(hash);
        fadeInBlocks(hash);
    };

    // Updates the active link in our menu. Finds the <a> tag corresponding to the hash and adds the active class to its parent.
    var updateNavActiveItem = function(hash) {
        if(navLinks.indexOf(hash) >= 0) {
            $navLink.removeClass(activeNavLinkClass);
            var linkQuery = "a[href='" + hash + "']";
            $(linkQuery).parent().addClass(activeNavLinkClass);
        }
    }

    // Update our navbar opacity if not at the top of the page.
    var updateNavOpacity = function(hash) {
        if(hash === "#top") {
            setElementTransparency($nav, 1.0);
        } else {
            setElementTransparency($nav, 0.6);
        }
    }

    // Set alpha value (transparency) on an element based on its current color and the alpha value passed in.
    var setElementTransparency = function(element, alpha) {
        var oldBackgroundColor = element.css('background-color');
        // Extract just rgb values from color
        var colorChannels = oldBackgroundColor.replace(/[^0-9\,]/g, '').split(',');
        // Create our new rgba color to set with the passed in alpha value
        var newBackgroundColor='rgba('+colorChannels[0]+','+colorChannels[1]+','+colorChannels[2]+','+alpha+')';
        element.animate({backgroundColor:newBackgroundColor}, 500);
    }

    // Fade in each block in the current navigation section
    var fadeInBlocks = function(hash) {
        var $domNode = $(hash.replace("#", "."));
        var $blocks = $domNode.find(fadeInBlockSelector);

        // Only attempt to animate the blocks if they have an opacity of 0 (coming into view for the first time)
        if($blocks.length > 0 && $($blocks[0]).css("opacity") === "0") {
            $blocks.each(function(i){
                $(this).delay(300*i).animate({'opacity':'1'},1000);
            });
        }
    }

    // Listener for a hash change, updates our menu.
    var hashListener = function() {
        $(window).on('hashchange', function() {
            updateMenu();
        });
    };

    // Initialize our menu by reseting our hash if necessary, updating our menu, and calling our listener.
    (function() {
        resetHash();
        updateMenu();
        hashListener();
    })();

    // Full Page Plugin Settings
	$('#fullpage').fullpage({
		anchors: ['top', 'about', 'work', 'connect'],
		menu: '#menu',
		fixedElements: '',
		verticalCentered: false,
		autoScrolling: false,
        showActiveTooltip: true,
		onLeave: function(index, nextIndex, direction){
			updateMenu(nextIndex);
        }
	});
});
