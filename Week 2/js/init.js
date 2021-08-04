// declare variables
let zoomLevel = 5;
const mapCenter = [37.804363, -122.271111];


// use the variables
const myMap = L.map('mapArea').setView(mapCenter, zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(myMap).bindPopup(`<h2>${message}</h2>`)
    createButtons(lat,lng,title); // new line!!!
    return message
}

// create a function to add buttons with a fly to command
function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 

    // attach an event listner to the button with Leaflet's flyTo on our map called "myMap"
    newButton.addEventListener('click', function(){
        myMap.flyTo([lat,lng]); 
    })
    document.body.appendChild(newButton); //this adds the button to our page.
}

// use our marker functions
addMarker(38.941631,-119.977219,'South Lake Tahoe','South Lake Tahoe – Independence  Weekend Getaway!')
addMarker(32.715736,-117.161087,'San Diego','UCSD – Sister Moves to Uni!')
addMarker(38.957370,-119.767690,'Carson City','Casron City – Independence Day Weekend pt. 2')
addMarker(33.812092,-117.918976,'Anaheim','Anaheim – SoCal Day Trip')
