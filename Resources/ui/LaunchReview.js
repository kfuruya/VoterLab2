var win = Ti.UI.createWindow({
  backgroundColor: 'white'
});

    var screenWidth = Ti.Platform.displayCaps.platformWidth; 
    var photo = '/Images/octane_coffee_mba.png';
    var imageTemp = Ti.UI.createImageView({image:photo,height:'auto',width:'auto'});
    var starWidth = imageTemp.toImage().width; 
    var starHeight = imageTemp.toImage().height;
    var aspectRatio = starWidth / (screenWidth + 20);
    var img =  Ti.UI.createImageView({image:photo,height:starHeight*aspectRatio,width:starWidth*aspectRatio});
	
        star = Ti.UI.createImageView({
            image: photo,
            top: 55,
            
            height:starHeight*aspectRatio,
            width:starWidth*aspectRatio
        });

var labl = Titanium.UI.createLabel({
	text:'Octane',
	top:20,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:20}
});
win.add(labl);
win.add(star);





var labl = Titanium.UI.createLabel({
	text:'We are located in Midtown Atlatna',
	top:240,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:15}
});

win.add(labl);



var screenWidth = Ti.Platform.displayCaps.platformWidth; 

offset = 10;
var screenSize = Titanium.Platform.displayCaps.platformHeight;




var submitBtn = Titanium.UI.createButton({
	title:'Photograph your food',
	bottom: 135,
	height:35,
	borderRadius:2,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(submitBtn);



var submitBtn = Titanium.UI.createButton({
	title:'Photograph and review now',
	bottom: 95,
	height:35,
	borderRadius:2,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(submitBtn);


var submitBtn = Titanium.UI.createButton({
	title:'Review now',
	bottom: 55,
	height:35,
	borderRadius:2,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(submitBtn);


	    submitBtn.addEventListener('click', function(e) {
			Ti.API.info('button' + e.source.buttonid + ' clicked.');
			
										

win2.open();

		 
	    });



var submitBtn = Titanium.UI.createButton({
	title:'Review later',
	bottom: 15,
	height:35,
	borderRadius:2,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(submitBtn);



	    submitBtn.addEventListener('click', function(e) {
			Ti.API.info('button' + e.source.buttonid + ' clicked.');
			alert('We will remind you tomorrow.');
		 
	    });

win.open();























var win2 = Ti.UI.createWindow({
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
win2.add(labl);
var starExp = new RatingControl();
starExp.top = 40+offset;

win2.add(starExp);



var labl = Titanium.UI.createLabel({
	text:'Customer Service',
	top:62+offset,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontSize:20}
});
win2.add(labl);
var starExp = new RatingControl();
starExp.top = 90+offset;

win2.add(starExp);

var labl = Titanium.UI.createLabel({
	text:'Speed of Service',
	top:112+offset,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontSize:20}
});
win2.add(labl);
var starExp = new RatingControl();
starExp.top = 140+offset;

win2.add(starExp);

var labl = Titanium.UI.createLabel({
	text:'Food Quality',
	top:162+offset,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontSize:20}
});
win2.add(labl);
var starExp = new RatingControl();
starExp.top = 190+offset;

win2.add(starExp);


var labl = Titanium.UI.createLabel({
	text:'Ambiance',
	top:212+offset,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontSize:20}
});
win2.add(labl);
var starExp = new RatingControl();
starExp.top = 240+offset;

win2.add(starExp);








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
win2.add(textArea);



var submitBtn = Titanium.UI.createButton({
	title:'I would come back',
	bottom: 0,
	left: 10,
	width:screenWidth/2 - 5,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});



	    submitBtn.addEventListener('click', function(e) {
			Ti.API.info('button' + e.source.buttonid + ' clicked.');
			alert("Thank you!");
		 
	    });
win2.add(submitBtn);
var submitBtn = Titanium.UI.createButton({
	title:'I would not come back',
	bottom: 0,
	right: 10,
	width:screenWidth/2 - 5,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});


	    submitBtn.addEventListener('click', function(e) {
			Ti.API.info('button' + e.source.buttonid + ' clicked.');
			alert("Thank you!");
		 
	    });
win2.add(submitBtn);


