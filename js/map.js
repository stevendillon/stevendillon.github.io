
function initMap() {
	var map;

	map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 40.006062, lng: -101.768699},
    	zoom: 4,
    	mapTypeId: google.maps.MapTypeId.SATELLITE
  	});

	map.setTilt(45)

	//correct selector
	document.getElementById('team').onchange = goToStadium;

	var locations = [
		{abbr: 'CHI', name: "Solider Field", address:"1410 Museum Campus Dr, Chicago, IL 60605", lat:41.863208, lng:-87.616409},
		{abbr: 'CIN', name: "Paul Brown Stadium", address:"1 Paul Brown Stadium, Cincinnati, OH 45202", lat:39.095674, lng:-84.516090},
		{abbr: 'BUF', name: "Ralph Wilson Stadium", address:"1 Bills Dr, Orchard Park, NY 14127", lat:42.774000, lng:-78.787017},
		{abbr: 'DEN', name: "Mile High Stadium", address:"1701 Bryant St, Denver, CO 80204", lat:39.744239, lng: -105.020145},
		{abbr: 'CLE', name: "FirstEnergy Stadium", address:"100 Alfred Lerner Way, Cleveland, OH 44114", lat:41.506278, lng:-81.699559}, 
		{abbr: 'TB', name: "Raymond James Stadium", address: "4201 N Dale Mabry Hwy, Tampa, FL 33607", lat:27.976134, lng:-82.503356},
		{abbr: 'AZ', name: "University of Phoenix Stadium", address:"1 Cardinals Dr, Glendale, AZ 85305", lat:33.527812, lng:-112.262634}, 
		{abbr: 'SD', name: "Qualcomm Stadium", address:"9449 Friars Rd, San Diego, CA 92108", lat:32.783419, lng:-117.119604}, 
		{abbr: 'KC', name: "Arrowhead Stadium", address:"1 Arrowhead Dr, Kansas City, MO 64129", lat:39.049131, lng:-94.483884}, 
		{abbr: 'IND', name: "Lucas Oil Stadium", address:"500 S Capitol Ave, Indianapolis, IN 46225", lat:39.760365, lng:-86.163845},
		{abbr: 'DAL', name: "AT&T Stadium", address:"1 AT&T Way, Arlington, TX 76011", lat:32.747582, lng:-97.094505},
		{abbr: 'MIA', name: "SunLife Stadium", address:"347 Don Shula Dr, Miami Gardens, FL 33056", lat:25.958275, lng: -80.238882},
		{abbr: 'PHI', name: "Lincoln Financial Field", address:'1 Lincoln Financial Field Way, Philadelphia, PA 19147', lat:39.900990, lng:-75.167411},
		{abbr: 'ATL', name: "Georgia Dome", address:'1 Georgia Dome Dr, Atlanta, GA 30313', lat:33.757984, lng:-84.400807},
		{abbr: 'NYG', name: "MetLife Stadium", address:"1 MetLife Stadium Dr, East Rutherford, NJ 07073", lat:40.813075, lng:-74.074134},
		{abbr:'JAX', name:"Everank Field", address:"1 Everbank Field Dr, Jacksonville, FL 32202", lat:30.324212, lng:-81.637277},
		{abbr: 'NYJ', name: "MetLife Stadium", address:"1 MetLife Stadium Dr, East Rutherford, NJ 07073", lat:40.813075, lng:-74.074134},
		{abbr: 'DET', name:"Ford Field", address:"2000 Brush St, Detroit, MI 48226", lat:42.340276, lng:-83.045528},
		{abbr: 'SF', name:"Levi's Stadium", address:"4900 Marie P Bartolo Way, Santa Clara, CA 95054", lat:37.404171, lng:-121.969490},
		{abbr: 'GB', name: "Lambeau Field", address:'1265 Lombardi Ave, Green Bay, WI 54304', lat:44.501540, lng:-88.062176}, 
		{abbr: 'CAR', name: "Bank of America Stadium", address:'800 S Mint St, Charlotte, NC 28202', lat:35.225467, lng:-80.852028},
		{abbr: 'NE', name: "Gillette Stadium", address:'1 Patriot Pl, Foxborough, MA 02035', lat:42.091105, lng:-71.264218},
		{abbr: 'OAK', name: "O.co Coliseum", address: "7000 Coliseum Way, Oakland, CA 94621", lat:37.751756, lng:-122.200524},
		{abbr: 'STL', name: "Edward Jones Dome", address: "901 N Broadway, St. Louis, MO 63101", lat:38.632982, lng:-90.188501},
		{abbr: 'BAL', name:"M&T Bank Stadium", address: "1101 Russell St, Baltimore, MD 21230", lat:39.278303, lng:-76.622651},
		{abbr: 'WASH', name:"FedExField", address:'1600 Fedex Way, Greater Landover, MD 20785', lat:38.907885, lng:-76.864525}, 
		{abbr: 'NO', name: "Mercedes-Benz Superdome", address:'1500 Sugar Bowl Dr, New Orleans, LA 70112', lat:29.951303, lng:-90.081191},
		{abbr: 'SEA', name:"CenturyLink Field", address:'800 Occidental Ave S, Seattle, WA 98134', lat:47.595405, lng:-122.331661}, 
		{abbr: 'PIT', name:"Heinz Field", address:'100 Art Rooney Ave, Pittsburgh, PA 15212', lat:40.447018, lng:-80.015803},
		{abbr: 'HOU', name: "NRG Stadium", address:"Reliant Pkwy, Houston, TX 77054", lat:29.684955, lng:-95.410707}, 
		{abbr: 'TEN', name:"Nissan Stadium", address:"1 Titans Way, Nashville, TN 37213", lat:36.166756, lng:-86.771322}, 
		{abbr: 'MIN', name: "U.S. Bank Stadium", address:"900 S 5th St, Minneapolis, MN 55415", lat:44.973880, lng:-93.257575},
	];

	//tie in value - if? 
	//get value trigger alert
	function goToStadium(element){
		//get the value from the form
		var city = document.getElementById('team').value

		//find the object in the array locations and return something that equals the variable we just made called city 		
		var stadium = locations.find(function(location){
			return location.abbr === city 
		});

		// alert(stadium.name)
		//the variable stadium is now our full array string, so we are assigned variable coordinates as the lat/lng of the stadium.variable
		var coordinates = new google.maps.LatLng(stadium.lat, stadium.lng);
		
		//in order to create marker, we need the variable map, coordinates, and stadium.name
		createMarker(map, coordinates, stadium.name);

	};

	function createMarker(map, coordinates, name){
		//console.log('created create marker')
//defines marker
		var marker = new google.maps.Marker({
	      position: coordinates,
	      map: map,
	      title: name
	    });
//defines stadium.name
		var stadium = locations.find(function(location){
			return location.name === name
		});	 
//shows stadium.name in content window
	    var infowindow = new google.maps.InfoWindow({
   			content: (stadium.name)
		});
//shows content window when you mouseover 
		google.maps.event.addListener(marker, 'mouseover', function () {
    		infowindow.open(map, marker);
	});

	    map.addListener('center_changed', function() {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    	window.setTimeout(function() {
      		map.panTo(marker.getPosition());
    		}, 3000);
  		});

 		 marker.addListener('click', function() {
    		map.setZoom(18);
    		map.setCenter(marker.getPosition());
 		 });

	}
}


