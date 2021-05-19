// from data.js
var tableData = data;

// Create references to table body
var tbody = d3.select("tbody");

// Add columns with UFO sighting data
tableData.forEach(row => {
    tbody.append("tr");

    for (key in row){
        const cell = tbody.append("td");
        cell.text(row[key]);
    }
});

