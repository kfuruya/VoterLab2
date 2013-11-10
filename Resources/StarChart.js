var win = Titanium.UI.currentWindow;


var screenSize = Titanium.Platform.displayCaps.platformHeight;
var RatingControl = require(ui/RatingControl);
var ratingControl = new RatingControl();
win.add(ratingControl);


win.open();