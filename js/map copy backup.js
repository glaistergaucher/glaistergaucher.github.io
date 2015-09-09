jQuery(function($){

	var longitude = 41.027793;
	var latitude = 28.980365;
	var canvas = "map";

	function randing_map(canvas, lan, lat){			
			var myLatlng = new google.maps.LatLng(lan,lat);
			var myOptions = {
						zoom: 13,
						center: myLatlng,
						mapTypeId: google.maps.MapTypeId.ROADMAP,
						maxZoom   : 20,
    					disableDefaultUI: true
					}			
			var map = new google.maps.Map( document.getElementById(canvas), myOptions );
			var marker = new google.maps.Marker({
			    position : myLatlng,
			    map      : map,
			    icon     : "img/00-general/map-cross.png"
			});
			var styles = [
			  {
			    featureType: "all",
			    stylers: [
			      { saturation: -80 }
			    ]
			  },{
			    featureType: "road.arterial",
			    elementType: "geometry",
			    stylers: [
			      { hue: "#072650" },
			      { saturation: 10 }
			    ]
			  },{
			    featureType: "poi.business",
			    elementType: "labels",
			    stylers: [
			      { visibility: "off" }
			    ]
			  }
			];	
			var infowindow = new google.maps.InfoWindow({
				content:"<div class='map_adresse'><div class='map_address'><span class='address'>Address : </span>Firuzağa mah. Boğazkesen cad. No.34 Kat 5 Tophane / Istanbul</div> <div class='map_tel'><span class='tel'>Phone : </span>+90 212 243 69 99</div><span class='tel'>Email : </span>info@ggarchi.com</div></div>"
			});	
			
			map.setOptions({styles: styles});

			google.maps.event.addListener(marker, 'click', function() {
			  infowindow.close(map,marker);
			});
        infowindow.open(map,marker);
	}
	randing_map(canvas, longitude, latitude);

});