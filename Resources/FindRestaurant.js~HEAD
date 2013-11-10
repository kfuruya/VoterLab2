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


	for (i = 0; i < rows.length; i++) {
	    fighter = rows[i];
	    row = Ti.UI.createTableViewRow({
	        height:'60dp'
	    });
	    var button = Ti.UI.createButton({
	    	title: "check in",
	    	left: 5,
	    	height : 40,
	    	buttonid : fighter.name
	    });
	    row.add(button);
	    nameLabel = Ti.UI.createLabel({
	        text:fighter.name,
	        left: 75,
	        font:{
	            fontSize:'24dp',
		    fontWeight:'bold'
		},
		height:'auto',
		left:'50dp',
		top:'5dp',
		color:'#000',
		touchEnabled:false
	    });

	    row.add(nameLabel);
	    tableData.push(row);
	    /* TODO Make this a server push and go to new window */
	    button.addEventListener('click', function(e) {
			Ti.API.info('button' + e.source.buttonid + ' clicked.');
			alert('Button ' + e.source.buttonid);
	    });
        }

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