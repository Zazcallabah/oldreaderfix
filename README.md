WHAT IS THIS I DONT EVEN
============
A chrome extension. 

I DONT USE CHROME
======
gtfo

HOW IS THIS USE
========
Download https://github.com/Zazcallabah/oldreaderfix/raw/master/oldreaderfix.crx
Enter chrome://extensions in chrome
drag the crx file to anywhere on that page

HOW IS THIS DEVELOP
=======
Download this repo. Really only the json and the js files are needed.
Save the files in a folder.
Name the folder something.
Go to chrome://extensions in chrome
Click developer mode.
Click load unpacked extension.
Find your folder.

HOW IS THIS MAKE
=======
Download this repo. Really only the json and the js files are needed.
Save the files in a folder.
Name the folder something.
Go to chrome://extensions in chrome
Click developer mode.
Click pack extension.
Find your folder.

WHAT IS CODE
========
simple jquery and javascript.
It subscribes to domsubtreemodified to find out when #sidebar is changed.
On change, just hide read items.

SUBSCRIPTION PATTERN IS DELAY
===========
Yes, maybe add another hide(); before setTimeout call to fix that.
Hide also needs to be inside setTimeout because we unsubscribed to prevent 
retriggering event when we change the DOM ourselves.

CAN YOU PULL REQUEST
=========
Probably yes, go ahead.

CAN YOU ....
===========
Probably no. Fork and pull request!

CAN I ...
=========
Very yes. Anything. I don't really care.


