function mixColors (firstcolor, secondcolor) {
    console.log(`${firstcolor} combines with ${secondcolor} to make:`);
    if(firstcolor === "red" && secondcolor === "blue" || firstcolor === "blue" && secondcolor === "red") {
        console.log("purple");
    } else if(firstcolor === "blue" && secondcolor === "yellow" || firstcolor === "yellow" && secondcolor === "blue") {
        console.log("green");
    } else if(firstcolor === "yellow" && secondcolor === "red" || firstcolor === "red" && secondcolor === "yellow") {
        console.log("orange");
    } else {
        console.log("Error");
    }
}

function drivingAction (weather) {
    console.log(`The weather is ${weather}`);
    if(weather === "ice") {
        console.log("Use studded tires and chains");
    } else if(weather === "snow") {
        console.log("Brush all snow off the car before driving");
    } else if(weather === "rain") {
        console.log("Turn on headlights and use wipers");
    } else if(weather === "sun") {
        console.log("Wear sunglasses");
    } else {
        console.log("Error");
    }
}

mixColors("blue", "yellow");
mixColors("red", "blue");
mixColors("yellow", "black");
drivingAction("sun");
drivingAction("snow");
drivingAction("sleet");