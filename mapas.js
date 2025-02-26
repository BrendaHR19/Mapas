// Inicializar el mapa centrado en Colombia con zoom activado y arrastre desactivado
var map = L.map('map', {
    center: [4.5709, -74.2973],
    zoom: 6,
    zoomControl: true,      // Activa el control de zoom (+/-)
    dragging: false,        // Desactiva el arrastre (paneo)
    scrollWheelZoom: true,  // Permite hacer zoom con la rueda del ratón
    doubleClickZoom: true,  // Permite hacer zoom con doble clic
    touchZoom: true         // Permite hacer zoom táctil
  });
  
  // Capa izquierda: Mapa político (CartoDB Positron)
  var politico = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '© CartoDB | © OpenStreetMap contributors'
  }).addTo(map);
  
  // Capa derecha: Mapa base (OpenStreetMap)
  var base = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
  
  // Crear control deslizante para comparar las capas
  var sideBySide = L.control.sideBySide(politico, base).addTo(map);
  
  // Activar herramientas de dibujo con Geoman
  map.pm.addControls({
    position: 'topleft',
    drawMarker: true,    // Dibujar puntos
    drawPolyline: true,  // Dibujar líneas
    drawPolygon: true,   // Dibujar polígonos
    editMode: true,      // Editar geometrías
    removalMode: true    // Eliminar geometrías
  });
  
  // Permitir interacción sobre las geometrías dibujadas
  map.on('pm:create', function(e) {
    e.layer.pm.enable();  // Habilita la edición para la nueva geometría
    console.log('Geometría creada:', e.layer.toGeoJSON());
  });
  

/* Evento para capturar los datos de los dibujos
map.on('pm:create', function(e) {
    console.log('Dibujo creado:', e.layer.toGeoJSON());
});*/