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
            var image = 'img/00-general/map-cross.png';
			var map = new google.maps.Map( document.getElementById(canvas), myOptions );
			var marker = new google.maps.Marker({
			    position : myLatlng,
			    map      : map,
			    icon     : image,
			});
			var styles = [
			  {
			    featureType: "all",
			    stylers: [
			      { saturation: -100 }
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
				
			
			map.setOptions({styles: styles});

			
	}
	randing_map(canvas, longitude, latitude);

});