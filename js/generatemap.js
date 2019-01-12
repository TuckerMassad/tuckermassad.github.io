var mymap = L.map('mapid').setView([41.767446, -72.677517], 6);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidHVja2VybWFzc2FkIiwiYSI6ImNqcXM4cGpseDBzejI0MW9hNDhqb3loenMifQ.72D3PziJ1JanwLKAyIRyvg',
    zoomControl: false
}).addTo(mymap);

L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(mymap);
var marker = L.marker([41.767446, -72.677517]).addTo(mymap);

mymap.touchZoom.disable();
mymap.doubleClickZoom.disable();
mymap.scrollWheelZoom.disable();
mymap.boxZoom.disable();
mymap.keyboard.disable();
$('.leaflet-control-attribution').hide()
