//deze 2 variabelen moeten aangemaakt worden om te "bestaan"
  var map;
  var infowindow;
  //functie die de map aanmaakt, van google maps
  function initMap() {
    //variabele aanmaken van de coordinaten van school
    var haagseHogeschool = {
      lat: 52.0670253,
      lng: 4.3235235
    };
    //nieuwe map aanmaken met id 'map'
    map = new google.maps.Map(document.getElementById('map'), {
      //maak het midden de haagse hogeschool
      center: haagseHogeschool,
      //de kaart zoomt in op 'niveau 13'
      zoom: 12,
          styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#212121"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#181818"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1b1b1b"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2c2c2c"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8a8a8a"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#373737"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3c3c3c"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#4e4e4e"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3d3d3d"
      }
    ]
  }
]




    });
    //infowindow zorgt voor die kleine textwindow die opent als je op een marker klikt
    infowindow = new google.maps.InfoWindow();
    //het raadplegen van de placesServices api van google maps
    var service = new google.maps.places.PlacesService(map);
    //functie voor in de buurt zoeken naar plekken
    service.nearbySearch({
      //zoekt vanaf haagsehogeschool
      location: haagseHogeschool,
      //met een radius van 5000m oftewel 5km
      radius: 5000,
      //type restaurant
      type: ['restaurant']
      //callback is nodig om de functie op te roepen en de data ervan te gebruiken
    }, callback);
  }
  //callback functie uitvoeren
  function callback(results, status) {
    //marker aanmaken voor het aantal restaurants dat gevonden zijn (zit een max aan, daarom maar een aantal)
    for (var i = 0; i < results.length; i++) {
      //voer functie createmarker van hieronder uit en geef de results m
      createMarker(results[i]);
    }
  }

  function createMarker(place) {

    
    var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
      icon: image
    });
    
  }