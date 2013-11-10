//add a single variable to the global scope to which we may choose to
//intentionally add items to
var globals = {};
/*
<<<<<<< HEAD
var labNumber = 'lab2.js';
=======
var labNumber = 'login.js';
>>>>>>> dad1911d62bfa2196eedcc4861a9c23dc7ef26ae
*/

var labNumber = "StarRatings.js";
//create a private scope to prevent further polluting the global object
(function() {
		
	var defaultWindow = Titanium.UI.createWindow({
		title : 'Titanium Workshop',
		navBarHidden : false,
		tabBarHidden: true
	});

	var jumpToApp = Titanium.UI.createButton({
		color : '#abcdef',
		top : 160,
		width : 301,
		height : 57,
		font : {
			fontSize : 20,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
		title : 'Go to lab'
	});
	
	defaultWindow.add(jumpToApp);

	var tabGroup = Titanium.UI.createTabGroup(
	{
		barColor:'#336699'
	});
	var tab = Ti.UI.createTab({
		title : 'default',
		icon : 'images/KS_nav_ui.png',
		window : defaultWindow
	});
	tabGroup.addTab(tab);
	//tabGroup.setActiveTab(1);

var lab1Window;
lab1Window = Titanium.UI.createWindow({
			url : labNumber,
			title : 'Login',
			backButtonTitle : 'Login',
			navBarHidden : false,
			backgroundColor: '#000',
			tabBarHidden: false
		});

	jumpToApp.addEventListener('click', function() {
		Ti.API.log("DEBUG",'jumpToApp');
		tab.open(lab1Window,{animated:true});
	});


	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	Titanium.UI.setBackgroundColor('#fff');
	var tabGroup = Titanium.UI.createTabGroup();
	var login = Titanium.UI.createWindow({
		title:'User Authentication Demo',
		tabBarHidden:true,
		url:'login.js'
	});
	var loginTab = Titanium.UI.createTab({
		title:"Login",
		window:login
	});
	tabGroup.addTab(loginTab);

	tabGroup.open({
		 transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	});

})();
