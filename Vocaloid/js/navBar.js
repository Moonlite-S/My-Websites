/*
Name:		Sean De La Cruz
Date:		May 1/2017
Section:	S59
*/

function hideShow() {
	 var nav = document.getElementById("navBarS"); //This connects with the entire NavBar, excluding the button
	 var nav2 = document.getElementById("navSwitch"); //An ID given specifically to change the text for the button
	
	//If the NavBar is gone, this gets it back
	if (nav.style.display === 'none')
	{	
		nav.style.display = 'block';
		nav2.value = '<<';
		
	}
	
	//If the NavBar is already onscreen, take it out
	else
	{	
		nav.style.display = 'none';
		nav2.value = '>>';
	}
}


function scrollColor() {
	styleObject = document.getElementsByTagName('html')[0].style
	styleObject.scrollbarFaceColor = "#ffffff"
	styleObject.scrollbarTrackColor = "#dcdcdc"
}