function showFlight() {
    let flightPlace = document.getElementById('flightPlace');
    if (document.getElementById('number').value === "") {
        return;
    }
    let flight = findFlight(document.getElementById('number').value);
    if (flight) {
        if (flightPlace.rows[1]) {
            flightPlace.deleteRow(1);
        }

        flightPlace.appendChild(createFlightRow(flight));
    }
}

function findFlight(number) {
    let flights = flightsD.concat(flightsA).concat(flightsL);
    for(let i = 0; i < flights.length; i++) {
        let subFlights = flights[i][2].split(" / ");
        for (let j = 0; j < subFlights.length; j++) {
            if (subFlights[j].substr(2, subFlights[j].length - 2) === number) {
                return flights[i];
            }
        }
    }
    return false;
}