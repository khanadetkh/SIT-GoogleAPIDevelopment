var maps;
var mapsOption; // Zoom

function initialMap() {
    var a = 1;
    var b = 2;
    var c = a + b;
    document.getElementById('myText-1').value = c;

    var KMUTT = { lat: 13.652689, lng: 100.493925 };
    mapsOption = { zoom: 8, center: KMUTT };
    maps = new google.maps.Map(
        document.getElementById('mapDisplay'), mapsOption
    )
    shop = {
        position: KMUTT,
        title: "MyShop",
        icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
        }
    }
    myMarker = new google.maps.Marker(shop);
    myMarker.setMap(maps);

    var shopsList = [
        {
            position: { lat: 13.722341, lng: 100.510987 },
            title: "MyShop at Paragon",
            icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
            },
            draggable:true
        },
        {
            position: { lat: 13.697667, lng: 100.537583 },
            title: "MyShop at RAMA3"
        },
        {
            position: { lat: 18.793268, lng: 98.984972 },
            title: "MyShop at Chiengmai"
        },
        {
            position: { lat: 35.681007, lng: 139.768792 },
            title: "MyShop at Tokyo"
        }
    ];

    for (let index = 0; index < shopsList.length; index++) {
        myMarker = new google.maps.Marker(shopsList[index]);
        myMarker.setMap(maps);
    }
    customer = {
        position: KMUTT,
        title: "Main Campus",
        draggable: true
    };
    markerDrag = new google.maps.Marker(customer);
    markerDrag.setMap(maps);
    google.maps.event.addListener(markerDrag,"click", function(event){
        alert('Hello World');
    })
    google.maps.event.addListener(markerDrag,"dragend", function(event){
        var lati = this.position.lat;
        var longi = this.position.lng;
        document.getElementById('lat').value = lati();
        document.getElementById('lng').value = longi();
    })
}

