var screenSize = Titanium.Platform.displayCaps.platformHeight;

var aLabel = Ti.UI.createLabel({
	text : "Review "+ Ti.UI.currentWindow.title,
	font : {fontSize:20},
	height : 40,
	width : 100,
	textAlign : '50'
});
Ti.UI.currentWindow.add(aLabel);

var checkIn = mkRadio('Check in', 10);
var picture = mkRadio('Take picture', 50);

Ti.UI.currentWindow.add(checkIn);
Ti.UI.currentWindow.add(picture);

checkIn.addEventListener('click', function(e) {
	var dialog = Ti.UI.createAlertDialog({
		message: 'Also review this restaurant now?',
		buttonNames: ['Review later','Review now'],
		cancel:1
		});
	dialog.addEventListener('click', function(e) {
		if (e.index === e.cancel || e.cancel === true) {
			Titanium.API.info('Clicked Review Later');  //TODO: link
		}
		else {
			Titanium.API.info('Clicked Review Later');  //TODO: link
		}
	});
	dialog.show();
});

function mkRadio(entree, topLoc){
	var buttonOut = Titanium.UI.createButton({
		bottom:topLoc,
		width:100,
		height:40,
		font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		title:entree
	});
	return buttonOut;
}
