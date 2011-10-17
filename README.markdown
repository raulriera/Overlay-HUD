# What is it?:

Overlay HUD is a module created to simplify how to display basic messages on the screen to an user in Appcelerator's Titanium 

# Installation:

This module is pretty simple to use, you just need to import the library like so

	var overlay = require("overlayHUD");

And that is it, now you can use the following functions to show or hide your HUD

	load(message, style); // Inits the HUD
	show(); // displays the HUD to the user
	hide(); // hides the HUD from the user	

# Docs

Below is a simple version of documentions, is so simple you don't need anything more than this :)

## load(message, style)

Init function, takes 2 optional arguments: the first one is the message you want to display, default is "Loading..." and the second argument is the style to use, default is "normal" and "tweetie", where normal is a fullscreen window and Tweetie is a black semi transparent window. Default is Tweetie

## show()

Animates the HUD and displays it to the user.

## hide()

Animates the HUD and hides it from the user.

# About:

Created by Raul Riera, http://raulriera.com