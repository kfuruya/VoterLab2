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
		if (	username.value	== "test" &&
			 	password.value	== "test") {
			var nearbyRest = Titanium.UI.createWindow({
										title 			: 'Restaurant',
										backButtonTitle : 'Login',
										navBarHidden 	: false,
										backgroundColor	: '#000',
										username		: username.value,
										url				: 'lab0.js'
										});
										
			Titanium.UI.currentTab.open(nearbyRest, {
				animated : true });
		 }
	}
	else
	{
		alert("Username/Password are required");
	}
});

