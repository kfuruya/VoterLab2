// title things

var screenSize = Titanium.Platform.displayCaps.platformHeight;
var buttonSpace = screenSize/6;


var aLabel = Ti.UI.createLabel({
	text : 'Title things',
	color : '#abcdef',
	font : {fontSize:20},
	height : 40,
	width : 100,
	top : 60,
	textAlign : '50'
});
Ti.UI.currentWindow.add(aLabel);


var fish = mkRadio('Take Photo', 50 + buttonSpace);
var veg  = mkRadio('veg', 50 + 3*buttonSpace);


Ti.UI.currentWindow.add(fish);
Ti.UI.currentWindow.add(veg);

fish.addEventListener('click', function() {
		fish.color = 'blue';
		chix.color = '#abcdef';
		veg.color  = '#abcdef';
});

veg.addEventListener('click', function() {
		veg.color = 'blue';
		fish.color = '#abcdef';
		chix.color  = '#abcdef';
});


chix.addEventListener('click', function() {
		var readContents;  
		var filename 	= 'KS_nav_views.png';  
		var userDir 	= Titanium.Filesystem.getUserDirectory();  
		var readFile 	= Titanium.Filesystem.getFile(userDir, filename);  
		var img 		= Ti.UI.createImageView({
  					image:readFile
					});
		Ti.UI.currentWindow.add(img);

});


function mkRadio(entree, topLoc){
	var buttonOut = Titanium.UI.createButton({
		color: '#abcdef',
		top:topLoc,
		width:100,
		height:40,
		font:{fontSize:20,fontWeight:'bold',fontFamily:'Helvetica Neue'},
		title:entree
	});
	return buttonOut;
}
