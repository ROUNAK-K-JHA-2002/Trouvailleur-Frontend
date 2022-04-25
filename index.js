var Region = document.getElementsByClassName("Region");
console.log("Region " + Region.length)

var destinationlist = document.getElementsByClassName("destinationlist");
console.log("destinationlist " + destinationlist.length)

var northRegionList = document.getElementById("north")


// Displaying ELEments according to click
northRegionList.style.display = "block"



function show(clicked) {
    var ele = clicked;
    console.log(ele);
    for (var i = 0; i < destinationlist.length; i++) {
        if (i == (ele - 1)) {
            destinationlist[i].style.display = "block"
            console.log(destinationlist[i])
        } else if (i != (ele - 1)) {
            destinationlist[i].style.display = "none"
        }
    }
}
// for (var k = 0; k < Region.length; k++) {
//     document.getElementById(k).addEventListener("click", () => {
//         alert("You have clicked " + k + "th button")
//     })
// }







fetch('./Destinations.json')
    .then((data) => {
        return data.json()
    }).then((PlaceData) => {
        for (var i = 0; i < destinationlist.length; i++) {
            var places = destinationlist[i].children
            console.log(places.length)
            if (i == 0) {
                for (var k = 0; k < PlaceData.North_India.length; k++) {
                    console.log(k)
                    var element = document.createElement("div")
                    element.className = "places text-center mx-4 my-3 pt-2"
                    document.getElementById("north").appendChild(element)
                }

                for (var j = 0; j < places.length; j++) {
                    var ele = places[j];
                    ele.innerHTML = PlaceData.North_India[j].place
                    ele.style.backgroundImage = "linear-gradient(to top, transparent ,#0000006b) ,url('./" + PlaceData.North_India[j].imgsrc + "')"
                }
                console.log(i)
            } else if (i == 1) {
                console.log(i)
                for (var k = 0; k < PlaceData.East_India.length; k++) {
                    console.log(k)
                    var element = document.createElement("div")
                    element.className = "places text-center mx-4 my-3 pt-2"
                    document.getElementById("east").appendChild(element)
                }

                for (var j = 0; j < places.length; j++) {
                    var ele = places[j];
                    ele.innerHTML = PlaceData.East_India[j].place
                    ele.style.backgroundImage = "linear-gradient(to top, transparent ,#0000006b) ,url('./" + PlaceData.East_India[j].imgsrc + "')"
                }
            } else if (i == 2) {
                console.log(i)
                for (var k = 0; k < PlaceData.West_India.length; k++) {
                    console.log(k)
                    var element = document.createElement("div")
                    element.className = "places text-center mx-4 my-3 pt-2"
                    document.getElementById("west").appendChild(element)
                }
                for (var j = 0; j < places.length; j++) {
                    var ele = places[j];
                    ele.innerHTML = PlaceData.West_India[j].place
                    ele.style.backgroundImage = "linear-gradient(to top, transparent ,#0000006b) ,url('./" + PlaceData.West_India[j].imgsrc + "')"
                }
            } else if (i == 3) {
                console.log(i)
                for (var k = 0; k < PlaceData.NorthEast_India.length; k++) {
                    console.log(k)
                    var element = document.createElement("div")
                    element.className = "places text-center mx-4 my-3 pt-2"
                    document.getElementById("northEast").appendChild(element)
                }
                for (var j = 0; j < places.length; j++) {
                    var ele = places[j];
                    ele.innerHTML = PlaceData.NorthEast_India[j].place
                    ele.style.backgroundImage = "linear-gradient(to top, transparent ,#0000006b) ,url('./" + PlaceData.NorthEast_India[j].imgsrc + "')"
                }
            } else {
                for (var k = 0; k < PlaceData.South_India.length; k++) {
                    console.log(k)
                    var element = document.createElement("div")
                    element.className = "places text-center mx-4 my-3 pt-2"
                    document.getElementById("south").appendChild(element)
                }
                for (var j = 0; j < places.length; j++) {
                    console.log(i)
                    var ele = places[j];
                    ele.innerHTML = PlaceData.South_India[j].place
                    ele.style.backgroundImage = "linear-gradient(to top, transparent ,#0000006b),url('./" + PlaceData.South_India[j].imgsrc + "')"
                }
            }
        }
    }).catch((error) => {
        console.log(error)
    })