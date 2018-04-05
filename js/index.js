/* This script loads the MEI file via HTTP request */

/* Start Verovio */
var vrvToolkit = new verovio.toolkit()

/* Setup Verovio - adjust the options below */
var zoom = 40
var defaultHeight = document.documentElement.clientHeight - document.getElementById('content').offsetHeight
var defaultWidth = document.documentElement.clientWidth - 50
options = {
    pageHeight: defaultHeight * 100 / zoom,
    pageWidth: defaultWidth * 100 / zoom,
    scale: zoom
}
vrvToolkit.setOptions(options)

/* Show the score */
showScore('score', 'data/example.mei') // <-- CHANGE THIS TO YOUR FILE
