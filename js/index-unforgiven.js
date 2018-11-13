/* This script loads the MEI file via HTTP request */
///////////////////////////
/* Some global variables */
///////////////////////////
var vrvToolkit = new verovio.toolkit();
var zoom = 90;
var pageHeight = 2970;
/*var pageWidth = 2100;

///////////////////////////////////////////////////
/* A function for setting options to the toolkit */
///////////////////////////////////////////////////
function setOptions() {
    //////////////////////////////////////////////////////////////
    /* Adjust the height and width according to the window size */
    //////////////////////////////////////////////////////////////
    pageHeight = $(document).height() * 100 / zoom ;
    pageWidth = $(window).width() * 100 / zoom ;
    options = {
                pageHeight: pageHeight,
                pageWidth: pageWidth,
                scale: zoom,
                adjustPageHeight: true
            };
    vrvToolkit.setOptions(options);
}

/* Show the score */
showScore('score', 'data/the_unforgiven.mei') // <-- CHANGE THIS TO YOUR FILE
