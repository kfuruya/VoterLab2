// Kim Furuya
// Nov 9 2013
//
// TODO on line 87
//
// Allows user to search for nearby businesses, first three nearest restaurants
/* TODO: show all the things, 
 * scrollable list, 
 * smart API rate limited calls
 * Make the search bar work
 * Link all the things
 * Add login button
 * price indication?
 * Review indication?
 * Actual distance communication (.7 miles to restaurant)
 */

// Set up the yelp API

var api_key = 'fEZ0DBcgGNEoDymnpTslbw';
var term = "food";
var YWSID = "1T-zw3dfGOecUkbSrqtt2g";
var category = "";
//var longitude = pos.coords.longitude;
//var latitude = pos.coords.latitude;
var query = "http://api.yelp.com/business_review_search?radius=10&term=" + term + "&category=" + category +
            "&num_biz_requested=50&ywsid=" + YWSID + "&location=Midtown+Atlanta";
var xhr = Titanium.Network.createHTTPClient();
var lock = true;
var rows = [];
var numRestaurants = Number.POSITIVE_INFINITY;
count = 0;

xhr.open('GET', query);
xhr.send();

var screenWidth = Ti.Platform.displayCaps.platformWidth; 

var win = Ti.UI.createWindow();
var table = Ti.UI.createTableView();
var tableData = [];
var json, fighters, fighter, i, row, nameLabel, nickLabel;

var xhr = Ti.Network.createHTTPClient({
    onload: function() {
	// Ti.API.debug(this.responseText);
	
    var results = JSON.parse(this.responseText);
    for (var item in results.businesses) {
    	//Ti.API.info(results.businesses[item]);
        rows.push(results.businesses[item]);
        count = count + 1;
    }
	Ti.App.fireEvent('tableLoaded');
    numRestaurants = count;



	row = Ti.UI.createTableViewRow({
	        height:'60dp'
	    });

	    var button = Ti.UI.createButton({
	    	title: 'Octane',
	    	left: 5,
	    	height : 40,
	    	width: screenWidth - 85,
	        font:{
	        
			color:'#336699',
	        fontSize:'24dp',
		    fontWeight:'bold'
			},
	    	buttonid : 'Octane'
	    });
	    row.add(button);
	    
	    var distLabl = Ti.UI.createLabel({
	    	text: '0.3 miles',
	    	right: 3,
	    	width: 65,
	        font:{
			color:'#336699',
	        fontSize:'20dp'
			},
	    });
	    row.add(distLabl);
	    button.addEventListener('click', function(e) {
			Ti.API.info('button' + e.source.buttonid + ' clicked.');
			win3.open();
		 
	    });
	    tableData.push(row);








	for (i = 0; i < rows.length; i++) {
	    fighter = rows[i];
	    if (fighter.is_closed == false) {
	    row = Ti.UI.createTableViewRow({
	        height:'60dp'
	    });
	    var button = Ti.UI.createButton({
	    	title: fighter.name,
	    	left: 5,
	    	height : 40,
	    	width: screenWidth - 85,
	        font:{
	        
			color:'#336699',
	        fontSize:'24dp',
		    fontWeight:'bold'
			},
	    	buttonid : fighter.name
	    });
	    row.add(button);
	    
	    var distLabl = Ti.UI.createLabel({
	    	text: fighter.distance.toFixed(1) + ' miles',
	    	right: 3,
	    	width: 65,
	        font:{
			color:'#336699',
	        fontSize:'20dp'
			},
	    });
	    row.add(distLabl);
	    
	    
	    
	    tableData.push(row);
	    /* TODO Make this a server push and go to new window */
	    button.addEventListener('click', function(e) {
			Ti.API.info('button' + e.source.buttonid + ' clicked.');
			alert('Button ' + e.source.buttonid);
	    });
       } }

	table.setData(tableData);
    },
    onerror: function(e) {
	Ti.API.debug("STATUS: " + this.status);
	Ti.API.debug("TEXT:   " + this.responseText);
	Ti.API.debug("ERROR:  " + e.error);
	alert('There was an error retrieving the remote data. Try again.');
    },
    timeout:5000
});

xhr.open("GET", query);
xhr.send();

win.add(table);
win.open();














var win3 = Ti.UI.createWindow({
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
win3.add(labl);
win3.add(star);





var labl = Titanium.UI.createLabel({
	text:'We are located in Midtown Atlatna',
	top:240,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:15}
});

win3.add(labl);



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
win3.add(submitBtn);



var submitBtn = Titanium.UI.createButton({
	title:'Photograph and review now',
	bottom: 95,
	height:35,
	borderRadius:2,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win3.add(submitBtn);


var submitBtn = Titanium.UI.createButton({
	title:'Review now',
	bottom: 55,
	height:35,
	borderRadius:2,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win3.add(submitBtn);


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
win3.add(submitBtn);



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


