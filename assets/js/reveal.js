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
        $this = this;

        // Show/Hide Navigation
        console.log($this)
    })
});



