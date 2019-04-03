$(document).ready(function() {

    /* Show More Text Button */
    
    $('#read-more-toggle').click(function() {
        var elem = $('#read-more-toggle').text();
        
        if (elem == '» mehr erfahren') {
            console.log('YES')
            // When btn is in read more state:
            $('#read-more-toggle').text('» Text schliessen');
            $('#read-more-target').slideDown();
        } else {
            // When btn is in read less state
            $('#read-more-toggle').text('» mehr erfahren');
            $('#read-more-target').slideUp();
        }
    });

    /* Burger Menu Button */

    $('#menu').click(function() {
        // Show/Hide Navigation
        var navBar = $('#navbar').toggleClass('nav-open');
    });

    /* Close Navigation when Menu Item is clicked */
    $('.navlink').click(function() {
        var navBar = $('#navbar').toggleClass('nav-open');
    });

    $(window).scroll(function() {
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();

        if ((scrollHeight - scrollPosition) / scrollHeight < 0.85) {
            $('#navbar').slideDown();
        } else {
            $('#navbar').slideUp();
        }
    })
});



