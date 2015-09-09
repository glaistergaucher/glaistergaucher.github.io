function initialize() {
    var myLatLng = new google.maps.LatLng(41.027793, 28.980365);
    var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(41.027793, 28.980365),
        streetViewControl: false 
        }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var image = 'http://www.mapsmarker.com/wp-content/uploads/leaflet-maps-marker-icons/bar_coktail.png';
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
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

google.maps.event.addDomListener(window, 'load', initialize);