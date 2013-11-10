function RatingControl() {
    var stars = []; 
    var numberOfStars = 5;
    var starOffImgSrc = '/Images/starempty.png';
    var starOnImgSrc = '/Images/starfull.png';
    var star;
    var imageTemp = Ti.UI.createImageView({image:starOnImgSrc,height:'auto',width:'auto'});
    var starWidth = imageTemp.toImage().width; 
    var screenWidth = Ti.Platform.displayCaps.platformWidth; 
    imageTemp = null;   
    var aspectRatio = 1;
    
    if (5*starWidth > screenWidth) {
    	aspectRatio = starWidth / screenWidth;
		starWidth = starWidth * aspectRatio;
    }
 
    var rateView = Ti.UI.createView({
        layout: 'absolute',
        height: starWidth,  // this is the same as the width, as my star images are square
        width: Titanium.UI.FILL,
    }); 
 
    // this stops the touch event bubbling to the starImg.
    var coverView = Ti.UI.createView({
        height: rateView.height,
        width: rateView.width,
        backgroundColor: 'transparent'
    });
	
    for(var i = 0; i < numberOfStars; i++) {
        star = Ti.UI.createImageView({
            rating: i + 1,
            image: starOffImgSrc,
            left: screenWidth/2 - (2.5*starWidth) + i * starWidth,
            width: starWidth,
            height: starWidth
            
        });
        rateView.addEventListener('click', function(e) {
            for(var i = 0; i < stars.length; i++) {     
                stars[i].image = (e.x >= stars[i].left) ? starOnImgSrc : starOffImgSrc;
            }
        }); 
        rateView.addEventListener('touchmove', function(e) {
            for(var i = 0; i < stars.length; i++) {     
                stars[i].image = (e.x >= stars[i].left) ? starOnImgSrc : starOffImgSrc;
            }           
        }); 

        stars.push(star);
        rateView.add(star);
    }
    

    rateView.add(coverView);
 
    rateView.getValue = function() {
        var value = 0;
        for(var i = 0; i < stars.length; i++) {
            value = (stars[i].image == starOnImgSrc) ? stars[i].rating : value;
        }
        return value;
    };
	
	rateView.getHeight = function() {
		return rateView.starWidth;
	};
	
    return rateView;
}

module.exports = RatingControl;