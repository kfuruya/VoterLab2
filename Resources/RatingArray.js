var screenSize = Titanium.Platform.displayCaps.platformHeight;
var buttonSpace = screenSize/6;

var aLabel = Ti.UI.createLabel({
	text : 'Enter ratings',
	font : {fontSize:20},
	height : 40,
	width : 100,
	textAlign : '50'
});
Ti.UI.currentWindow.add(aLabel);

var fish = mkRadio('Take Photo', 50 + buttonSpace);

Ti.UI.currentWindow.add(fish);




fish.addEventListener('click', function(e) {
	var dialog = Ti.UI.createAlertDialog({
		message: 'Also review this restaurant now?',
		buttonNames: ['Review later','Review now'],
		cancel:1
		});
	dialog.addEventListener('click', function(e) {
		if (e.index === e.cancel || e.cancel === true) {
			return;
		}
		switch (e.index) {
			case 0: Titanium.API.info('Clicked Review Later');
			break;
		
			default:
			Titanium.API.info('Clicked Review Now');
			break;
		}
	});
	dialog.show();
});


function mkRadio(entree, topLoc){
	var buttonOut = Titanium.UI.createButton({
		top:topLoc,
		width:100,
		height:40,
		font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		title:entree
	});
	return buttonOut;
}
