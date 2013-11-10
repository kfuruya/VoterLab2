	var win = Titanium.UI.createWindow({
		title : 'Titanium Workshop',
		navBarHidden : false,
		tabBarHidden: true
	});

var screenSize = Titanium.Platform.displayCaps.platformHeight;
var RatingControl = require('ui/RatingControl2');
Ti.API.info(RatingControl);
var ratingControl = new RatingControl();
win.add(ratingControl);


win.open();