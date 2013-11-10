function toolbar(_args) {
	var win = Ti.UI.createWindow({
		title:_args.title
	});
	
	// initialize to all modes
	win.orientationModes = [
		Titanium.UI.PORTRAIT,
		Titanium.UI.LANDSCAPE_LEFT,
		Titanium.UI.LANDSCAPE_RIGHT
	]; 


	var image = Ti.UI.createImageView({
  		image:'/images/steak.jpg',
  	
	});

win.add(image);
image.visible = false;


	var camera = Titanium.UI.createButton({
		backgroundImage:'/images/camera.png',
		width:'auto',
		height:'auto'
	});
	
		var save = Titanium.UI.createButton({
		
		title:'Save',
		width:'auto',
		height:'auto',
		
	});
	save.enabled = false;
	
		var cancel = Titanium.UI.createButton({
		
		title:'Cancel',
		width:'auto',
		height:'auto',
	
		
	});
	cancel.enabled = false;	
	camera.addEventListener('click', function()
	{
		//Titanium.UI.createAlertDialog({title:'Toolbar',message:'You clicked camera!'}).show();
		image.visible = true;
		save.enabled = true;
		cancel.enabled = true;
		camera.enabled = false;
	});
	
	cancel.addEventListener('click', function()
	{
		//Titanium.UI.createAlertDialog({title:'Toolbar',message:'You clicked camera!'}).show();
		image.visible = false;
		save.enabled = false;
		cancel.enabled = false;
		camera.enabled = true;
	});
	
	save.addEventListener('click', function()
	{
		//Titanium.UI.createAlertDialog({title:'Toolbar',message:'You clicked camera!'}).show();
		image.visible = false;
		save.enabled = false;
		cancel.enabled = false;
		camera.enabled = true;
	});

	// create and add toolbar
	var toolbar1 = Titanium.UI.iOS.createToolbar({
		items:[camera,save,cancel],
		bottom:0,
		borderTop:true,
		borderBottom:false,
		translucent:true,
		barColor:'#999'
	});	
	win.add(toolbar1);

	return win;
}

module.exports = review_image;
