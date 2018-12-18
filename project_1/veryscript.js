function setTimeTable(type) {
    var flights;
    switch (type) {
        case('departures'):
            flights = flightsD;
            break;
        case('arrivals'):
            flights = flightsA;
            break;
        case('delayed'):
            flights = flightsL;
    }

    let timetable = document.getElementById('timetable');
    for (let i = 0; i < flights.length; i++) {
        let tr = createFlightRow(flights[i]);
        timetable.appendChild(tr);
    }
}

function createFlightRow(flight) {
    let i = 0;
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.appendChild(document.createTextNode(flight[0]));
    tr.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode(flight[1]));
    tr.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode(flight[2]));
    tr.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode(flight[3]));
    tr.appendChild(td);
    td = document.createElement('td');
    td.appendChild(document.createTextNode(flight[4]));
    tr.appendChild(td);
    return tr;
}