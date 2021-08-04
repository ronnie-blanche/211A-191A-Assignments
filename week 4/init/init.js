const myMap = L.map('mapArea').setView([34.0709, -118.444], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

let url = "GIVE_ME_A_URL"
fetch(url)
	.then(response => {
		return response.json();
		})
    .then(data =>{
        console.log(data)
    })

function addMarker(lat,lng,message){
        L.marker([lat,lng]).addTo(myMap).bindPopup(`<h2>${message}</h2>`)
        return message    
}

addMarker(37,-122,'home land!')
