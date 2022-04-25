var Region = document.getElementsByClassName("Region");
console.log("Region " + Region.length)

var destinationlist = document.getElementsByClassName("destinationlist");
console.log("destinationlist " + destinationlist.length)

var northRegionList = document.getElementById("north")
var eastRegionList = document.getElementById("east")
var westRegionList = document.getElementById("west")
var northEastRegionList = document.getElementById("northEast")
var southRegionList = document.getElementById("south")


// Displaying ELEments according to click
northRegionList.style.display = "block"



function showNorth() {
    northRegionList.style.display = "block"
    northEastRegionList.style.display = "none"
    eastRegionList.style.display = "none"
    westRegionList.style.display = "none"
    southRegionList.style.display = "none"
}

function showEast() {
    northRegionList.style.display = "none"
    northEastRegionList.style.display = "none"
    eastRegionList.style.display = "block"
    westRegionList.style.display = "none"
    southRegionList.style.display = "none"
}

function showWest() {
    northRegionList.style.display = "none"
    northEastRegionList.style.display = "none"
    eastRegionList.style.display = "none"
    westRegionList.style.display = "block"
    southRegionList.style.display = "none"
}

function showNE() {
    northRegionList.style.display = "none"
    northEastRegionList.style.display = "block"
    eastRegionList.style.display = "none"
    westRegionList.style.display = "none"
    southRegionList.style.display = "none"
}

function showSouth() {
    northRegionList.style.display = "none"
    northEastRegionList.style.display = "none"
    eastRegionList.style.display = "none"
    westRegionList.style.display = "none"
    southRegionList.style.display = "block"
}

fetch('./Destinations.json')
    .then((data) => {
        return data.json()
    }).then((PlaceData) => {
        for (var i = 0; i < destinationlist.length; i++) {
            var places = destinationlist[i].children
            console.log(places.length)
            if (i == 0) {
                for (var j = 0; j < places.length; j++) {
                    var ele = places[j];
                    ele.innerHTML = PlaceData.North_India[j].place
                    ele.style.backgroundImage = "url('./" + PlaceData.North_India[j].imgsrc + "')"
                }
                console.log(i)
            } else if (i == 1) {
                console.log(i)
                for (var j = 0; j < places.length; j++) {
                    var ele = places[j];
                    ele.innerHTML = PlaceData.East_India[j].place
                    ele.style.backgroundImage = "url('./" + PlaceData.East_India[j].imgsrc + "')"
                }
            } else if (i == 2) {
                console.log(i)
                for (var j = 0; j < places.length; j++) {
                    var ele = places[j];
                    ele.innerHTML = PlaceData.West_India[j].place
                    ele.style.backgroundImage = "url('./" + PlaceData.West_India[j].imgsrc + "')"
                }
            } else if (i == 3) {
                console.log(i)
                for (var j = 0; j < places.length; j++) {
                    var ele = places[j];
                    ele.innerHTML = PlaceData.NorthEast_India[j].place
                    ele.style.backgroundImage = "url('./" + PlaceData.NorthEast_India[j].imgsrc + "')"
                }
            } else {
                for (var j = 0; j < places.length; j++) {
                    console.log(i)
                    var ele = places[j];
                    ele.innerHTML = PlaceData.South_India[j].place
                    ele.style.backgroundImage = "url('./" + PlaceData.South_India[j].imgsrc + "')"
                }
            }
        }
    }).catch((error) => {
        console.log(error)
    })