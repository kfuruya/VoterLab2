var win = Ti.UI.createWindow({
  backgroundColor: 'white'
});



var screenWidth = Ti.Platform.displayCaps.platformWidth; 

offset = 10;
var screenSize = Titanium.Platform.displayCaps.platformHeight;
var RatingControl = require('ui/RatingControl2');
Ti.API.info(RatingControl);



var labl = Titanium.UI.createLabel({
	text:'General Experience',
	top:10+offset,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:20}
});
win.add(labl);
var starExp = new RatingControl();
starExp.top = 40+offset;

win.add(starExp);



var labl = Titanium.UI.createLabel({
	text:'Customer Service',
	top:62+offset,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontSize:20}
});
win.add(labl);
var starExp = new RatingControl();
starExp.top = 90+offset;

win.add(starExp);

var labl = Titanium.UI.createLabel({
	text:'Speed of Service',
	top:112+offset,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontSize:20}
});
win.add(labl);
var starExp = new RatingControl();
starExp.top = 140+offset;

win.add(starExp);

var labl = Titanium.UI.createLabel({
	text:'Food Quality',
	top:162+offset,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontSize:20}
});
win.add(labl);
var starExp = new RatingControl();
starExp.top = 190+offset;

win.add(starExp);


var labl = Titanium.UI.createLabel({
	text:'Ambiance',
	top:212+offset,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontSize:20}
});
win.add(labl);
var starExp = new RatingControl();
starExp.top = 240+offset;

win.add(starExp);








var textArea = Ti.UI.createTextArea({
  borderWidth: 2,
  borderColor: '#bbb',
  borderRadius: 5,
  color: '#888',
  font: {fontSize:20, fontWeight:'bold'},
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
  returnKeyType: Ti.UI.RETURNKEY_GO,
  textAlign: 'left',
  value: 'Tell us about your experience',
  top: 292,
  width: 300, height : 150
});
win.add(textArea);



var submitBtn = Titanium.UI.createButton({
	title:'I would come back',
	bottom: 0,
	left: 10,
	width:screenWidth/2 - 5,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
win.add(submitBtn);
var submitBtn = Titanium.UI.createButton({
	title:'I would not come back',
	bottom: 0,
	right: 10,
	width:screenWidth/2 - 5,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
win.add(submitBtn);



win.open();
