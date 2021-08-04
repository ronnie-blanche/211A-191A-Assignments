const map = L.map('map').setView([34.0522, -118.2436], 5);

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//JavaScript let variable declaration to create a marker
let marker = L.marker([37.8010791, -122.270157]).addTo(map)
		.bindPopup('T4 Oakland ')
		.openPopup();

let othermarker = L.marker([33.716240, -117.939880]).addTo(map)
		.bindPopup('The Alley - Fountain Valley ')
		.openPopup();

let othermarker1 = L.marker([34.058601, -118.418999]).addTo(map)
		.bindPopup('Redstraw')
		.openPopup();

let othermarker2 = L.marker([34.063171, 118.299522]).addTo(map)
		.bindPopup('White and Brown ')
		.openPopup();

let othermarker3 = L.marker([37.783660, -122.432470]).addTo(map)
		.bindPopup('Boba Guys Filmore ')
		.openPopup();

let othermarker4 = L.marker([37.374530, -121.872470]).addTo(map)
		.bindPopup('7Leaves Cafe ')
		.openPopup();
		