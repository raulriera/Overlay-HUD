// Hud constants
exports.STYLE_NORMAL = "normal";
exports.STYLE_TWEETIE = "tweetie";

exports.HIDE_EVENT = "OVERLAY:HUD:HIDE";

// Private variables
var messageWin, messageView, messageLabel;

// Init function
exports.load = function(message, style){	
	
	message = message || "Loading...";
	style = style || exports.STYLE_TWEETIE;
	
	if (style === exports.STYLE_TWEETIE){
		messageWin = Titanium.UI.createWindow({
			height: 150,
			width: 150,
			borderRadius:10,
			touchEnabled:false,
		
			orientationModes : [
			Titanium.UI.PORTRAIT,
			Titanium.UI.UPSIDE_PORTRAIT,
			Titanium.UI.LANDSCAPE_LEFT,
			Titanium.UI.LANDSCAPE_RIGHT
			]
		});
		
		messageView = Titanium.UI.createView({
			id: 'messageview',
			height: 150,
			width: 150,
			borderRadius: 10,
			backgroundColor: '#000',
			opacity: 0.7,
			touchEnabled: false
		});
		
		messageLabel = Titanium.UI.createLabel({
			id: 'messagelabel',
			text: message,
			color: '#fff',
			width: 150,
			height: 'auto',
			font: {fontSize: 20, fontWeight: 'bold'},
			textAlign:'center'
		});
	} else {
		messageWin = Titanium.UI.createWindow({
			touchEnabled:false,
		
			orientationModes : [
			Titanium.UI.PORTRAIT,
			Titanium.UI.UPSIDE_PORTRAIT,
			Titanium.UI.LANDSCAPE_LEFT,
			Titanium.UI.LANDSCAPE_RIGHT
			]
		});
		
		messageView = Titanium.UI.createView({
			id: 'messageview',
			backgroundColor: '#c5ccd4',
			touchEnabled: false
		});
		
		messageLabel = Titanium.UI.createLabel({
			id: 'messagelabel',
			text: message,
			color: '#000000',
			width: 150,
			height: 'auto',
			font: {fontSize: 20, fontWeight: 'bold'},
			textAlign:'center'
		});
	}
	
	// Attach everything to this window
	messageWin.add(messageView);
	messageWin.add(messageLabel);
	
	// Return the whole thing so we can change this methods
	return exports;
};

// Displays the overlay HUD to the user
exports.show = function(){
	// Set an initial low scale
	messageWin.transform = Ti.UI.create2DMatrix().scale(0.001);
	
	// Animate it to perform a nice "scale in"
	var scaleInTransform = Ti.UI.create2DMatrix();
	scaleInTransform = scaleInTransform.scale(1);
	
	var scaleIn = Titanium.UI.createAnimation();
	scaleIn.transform = scaleInTransform;
	scaleIn.duration = 250;
	messageWin.animate(scaleIn);
	
	messageWin.open();
	
	// Return the whole thing so we can change this methods
	return exports;
};

// Hides the overlay HUD from the user
exports.hide = function(){
	
	var scaleOutTransform = Ti.UI.create2DMatrix();
	scaleOutTransform = scaleOutTransform.scale(0.001);
	
	var scaleOut = Titanium.UI.createAnimation();
	scaleOut.transform = scaleOutTransform;
	scaleOut.duration = 250;
	messageWin.animate(scaleOut);
	
	// When the animation finishes, close the window
	scaleOut.addEventListener('complete', function(){
		messageWin.close();
	});
	
	// Return the whole thing so we can change this methods
	return exports;
};

// In case we want to hide this HUD via an event lsitener
Ti.App.addEventListener(exports.HIDE_EVENT, function(){
	exports.hide();
}); 