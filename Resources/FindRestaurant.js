// Kim Furuya
// Nov 9 2013
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





var Settings = Titanium.Filesystem.getFile(Titanium.Filesystem.tempDirectory,'Settings');
Ti.API.info("Created Settings: " + Settings.createDirectory());
Ti.API.info('Settings ' + Settings);
var newFile = Titanium.Filesystem.getFile(Settings.nativePath,'Settings.txt');

newFile.createFile();

if (newFile.exists()){
    newFile.write('line 1\n');
    Ti.API.info('newfile: '+newFile.read());
}





// Set up the yelp API

var api_key = 'fEZ0DBcgGNEoDymnpTslbw';
var term = "food";
var YWSID = "1T-zw3dfGOecUkbSrqtt2g";
var category = "";
//var latitude = pos.coords.latitude;
var latitude = 34.1386;
var longitude = 118.1255;
//var longitude = pos.coords.longitude;
var query = "http://api.yelp.com/business_review_search?radius=10&term=" + term + "&category=" + category +
            "&num_biz_requested=50&ywsid=" + YWSID + "&location=Midtown+Atlanta";
var xhr = Titanium.Network.createHTTPClient();

var rows = [];
xhr.onload = function() {
    try {
    	var results = JSON.parse(this.responseText);
 
        //Titanium.API.debug(results);
 
        for (var item in results.businesses) {
        	Ti.API.info(item);
        	Ti.API.info(results.businesses[item].name)
//            rows.push(buildData(results.businesses[item]));
        }
        //yelpTableView.setData(rows);
        
    } catch(e) {
        alert(e);
        
        Ti.API.info("no work");
    }
};

if (newFile.exists()){
    newFile.write(rows.length);
    Ti.API.info('newfile: '+newFile.read());
}

xhr.open('GET', query);
xhr.send();





var view = Ti.UI.createView({
    backgroundColor:'#000',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    layout:'vertical'
});

