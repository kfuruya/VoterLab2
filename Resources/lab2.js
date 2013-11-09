// do NOT import all the stuff from lab 1 
// Lab 2
var win = Ti.UI.createWindow({
  backgroundColor: 'white',
  exitOnClose: true,
  fullscreen: false,
  title: 'ScrollView Demo'
});

var scrollView = Ti.UI.createScrollView({
  contentWidth: 'auto',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: true,
  height: '80%',
  width: '80%'
});
var view = Ti.UI.createView({
  backgroundColor:'#336699',
  borderRadius: 10,
  top: 10,
  height: 2000,
  width: 1000
});
scrollView.add(view);
win.add(scrollView);
win.open();



