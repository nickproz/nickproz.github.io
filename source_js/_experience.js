/*
-----------------------------------------------
|               Experience Logic              |
-----------------------------------------------
*/
$(document).ready(function() {

    /**
     * Modal initialization.
     */
    $('.experience-tile').on('click touchstart', function() {
        // Grab the current id value, prepend a hash, and remove tile from the selector (to get the actual modal selector)
        let target = "#" + $(this).attr('id').replace('-tile', "");

        // Modal initialization on the currently clicked modal
        $(target)
        // .modal('setting', 'transition', 'horizontal flip')
        .modal({blurring: true})
        .modal('show');
    })
});
