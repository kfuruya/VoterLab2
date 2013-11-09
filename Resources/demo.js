var view = Ti.UI.createView({
	top:0,
	left:0,
	width: '100%',
	height: '100%',
	layout: 'vertical',
	backgroundColor: 'red'
})

var helpLabel = Titanium.UI.createLabel({
	color:'#abcdef',
	highlightedColor:'#0f0',
	backgroundColor:'transparent',
	width:200,
	height:'auto',
	text:'Please enter your login info'
});

var usernameField = Titanium.UI.createTextField({
	value:'Joe Bloggs',
	color:'#abcdef',
	backgroundColor: '#fff',
	height:35,
	top: 10,
	//left:10,
	width:250,
	borderRadius: 10,
	font:{fontSize:15},
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_LINE
});

var passwordField = Titanium.UI.createTextField({
	hintText:'Enter password here',
	color:'#abcdef',
	backgroundColor: '#fff',
	height:35,
	top: 10,
	//left:10,
	width:250,
	borderRadius: 10,
	font:{fontSize:15},
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_LINE
});

var submitButton = Titanium.UI.createButton({
	color:'#abcdef',
	top: 20,
	width:100,
	height:40,
	font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
	title:'Login'
});

view.add(helpLabel);
view.add(usernameField);
view.add(passwordField);
view.add(submitButton);

Ti.UI.currentWindow.add(view);

var voteWin = Titanium.UI.createWindow({
title : 'Vote',
backButtonTitle : 'Login',
navBarHidden : false,
backgroundColor: 'blue',
username: usernameField.value,
height: 200,
width: 200
});

var usernameLabel = Titanium.UI.createLabel({
	color:'#abcdef',
	highlightedColor:'#0f0',
	backgroundColor:'transparent',
	width:200,
	height:'auto',
	text: voteWin.username
});
voteWin.add(usernameLabel);

/*
 
 */

submitButton.addEventListener('click', function() {
	//alert('firing a special checkLogin event!');
	Ti.App.fireEvent('checkLogin', {location: 'submitButton'});
	//Titanium.UI.currentTab.open(voteWin, {animated : true });
});


Ti.App.addEventListener('checkLogin', function(data) {
	//data.location // this should be 'submitButton'

    //{transform:t2, duration:300}
	//Titanium.UI.currentTab.open(voteWin, {animated : true });
	
	//return;
	
	
	var t2 = Titanium.UI.create2DMatrix();	
                t2 = t2.scale(1.0);
                t2 = t2.rotate(-180);
                	
	voteWin.open({transform:t2, duration:300});
	
		 	var t3 = Titanium.UI.create2DMatrix();	
                t3 = t3.scale(0.0);
                t3 = t3.rotate(3200);
	var t1 = Ti.UI.create3DMatrix();
		 	t1 = t1.rotate(180,1,1,0);
			t1 = t1.scale(2.0,2.0,2.0);
			t1.m34 = 1.0/-1500;                
	setTimeout(function() {
		voteWin.close({transform: t1, duration: 1000})
	},
	1000)
});



