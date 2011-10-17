# What is it?:

Overlay HUD is a module created to simplify how to display basic messages on the screen to an user in Appcelerator's Titanium 

# Usage:

This module is pretty simple to use, you just need to import the library like so

	var overlay = require("overlayHUD");

And that is it, now you can use the following functions to show or hide your HUD

	load(message, style); // init function, takes 2 optional arguments: the first one is the message you want to display, default is "Loading..." and the second argument is the style to use, default is "normal" and "tweetie", where normal is a fullscreen window and tweetie is a black semi transparent window. Default is tweetie
	show(); // displays the HUD to the user
	hide(); // hides the HUD from the user	

# About:

Created by Raul Riera, http://raulriera.com