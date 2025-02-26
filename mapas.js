var map = L.map('map').setView([4.7110, -74.0721], 13);

// Definir dos capas base
var capaOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map); // Capa base por defecto

var capaEsri = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; Esri, DigitalGlobe, GeoEye, Earthstar Geographics'
}).addTo(map); // Segunda capa por encima

// Obtener el control deslizante
var slider = document.getElementById("slider");

// Evento para cambiar la opacidad de la capa superior (Esri)
slider.addEventListener("input", function() {
    capaEsri.setOpacity(this.value);
});

// Activar herramientas de dibujo con Leaflet-Geoman
map.pm.addControls({
    position: 'topleft',
    drawMarker: true,
    drawPolygon: true,
    drawPolyline: true,
    drawCircle: true,
    drawRectangle: true,
    editMode: true,
    dragMode: true,
    cutPolygon: true,
    removalMode: true
});

/* Evento para capturar los datos de los dibujos
map.on('pm:create', function(e) {
    console.log('Dibujo creado:', e.layer.toGeoJSON());
});*/