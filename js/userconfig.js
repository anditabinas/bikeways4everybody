/*
 * Central repository of options to change when forking this map!
 */

var config = {
	//Set Map Bounds & point map is centered around
	mapFocus : [42.381899, -71.122499],
	south : 42.24 ,
	west : -71.27,
	north : 42.453,
	east : -70.95,
	//Mapbox access token & key for basemap
	mapboxAccessToken :              
            'pk.eyJ1IjoiYW5kaXRhYmluYXMiLCJhIjoiY2plejI3aHp3MDV3MjMzcW9ydXl2bHNmZiJ9.9h6j7BbkM-PUtK0zaZ1iUg',
    //Change to your username, insert function on cartodb, and cartodb tablename (see also /cartoDB_functions)
	cartoDBusername : 'anditabinas',
	cartoDBinsertfunction : 'crowdsourcing_p',
	walkthroughWelcome: "<p>This webmap allows you to view data collected by the <a href='http://bostoncyclistsunion.org/' target='_blank'>Boston Cyclists Union</a> on biking in Boston.</p><p>It also allows you to submit input on where biking infrastructure can be improved by drawing on the map! The map is restricted to the inner core of Metro Boston, where we concentrate our advocacy.</p>"
};
