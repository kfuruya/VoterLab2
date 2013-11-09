
var view = Ti.UI.createView({
    backgroundColor:'#000',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    layout:'vertical'
});
Ti.UI.currentWindow.add(view);
function createRadioButton(title) {
	var selectionView1 = Titanium.UI.createView({
		top: 20, left: 0, height: 100, width: 200,
		borderRadius: 10,
		backgroundColor: 'green' });
		
	var selection1Label = Titanium.UI.createLabel({
		text : title,	color : '#f79e18', 
		font : {fontSize : 40}, 	textAlign: 'center' 
		});
	selectionView1.add(selection1Label);
	
	
	selectionView1.addEventListener('click', function() {
		
		// other radios deselect them
		for (var i=0; i < buttons.length; i++) {
		  buttons[i].backgroundColor = 'blue';
		};
		Ti.API.warn('selecting this option' + title);
		selectionView1.backgroundColor = 'red';
		
	})
	return selectionView1;
}

var buttons = [];
var button1 = createRadioButton('Fish');
buttons.push(button1);
view.add(button1);
var button2 = createRadioButton('Chix');
buttons.push(button2);
view.add(button2);
var button3 = createRadioButton('Veg');
buttons.push(button3);
view.add(button3);


