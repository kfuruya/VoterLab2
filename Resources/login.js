var win = Titanium.UI.currentWindow;
var username = Titanium.UI.createTextField({
	color:'#336699',
	top:10,
	left:10,
	width:300,
	height:40,
	hintText:'Username',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(username);
var password = Titanium.UI.createTextField({
	color:'#336699',
	top:60,
	left:10,
	width:300,
	height:40,
	hintText:'Password',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(password);
var loginBtn = Titanium.UI.createButton({
	title:'Login',
	top:110,
	width:90,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14}
});
win.add(loginBtn);

var loginReq = Titanium.Network.createHTTPClient();
loginBtn.addEventListener('click',function(e)
{
	if (username.value != '' && password.value != '')
	{
		
		var url = "https://raw.github.com/appcelerator/Documentation-Examples/master/HTTPClient/data/json.txt";
		var json, fighters, fighter, i, row;
		
		var xhr = Ti.Network.createHTTPClient({
		    onload: function() {
			// Ti.API.debug(this.responseText);
		
			json = JSON.parse(this.responseText);
			for (i = 0; i < json.fighters.length; i++) {
			    fighter = json.fighters[i];
			 	if(fighter.name == username.value &&
			 	   fighter.name == password.value) {
			 	   	var nearbyRest = Titanium.UI.createWindow({
										title 			: 'Restaurant',
										backButtonTitle : 'Login',
										navBarHidden 	: false,
										backgroundColor	: '#000',
										username		: username.value,
										url				: 'awesomeStuff.js'
										});
										
					Titanium.UI.currentTab.open(nearbyRest, {
						animated : true
					});
			 	   }
			 }
		    },
		    onerror: function(e) {
			Ti.API.debug("STATUS: " + this.status);
			Ti.API.debug("TEXT:   " + this.responseText);
			Ti.API.debug("ERROR:  " + e.error);
			alert('There was an error retrieving the remote data. Try again.');
		    },
		    timeout:5000
		});
		
		xhr.open("GET", url);
		xhr.send();
		alert("this far");
		
		
		
		
		
		
		 	
	}
	else
	{
		alert("Username/Password are required");
	}
});

