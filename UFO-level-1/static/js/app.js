// from data.js
var tableData = data;
console.log(tableData);

// Create references to table body
var tbody = d3.select("tbody");


// Add columns with UFO sighting data
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    //Append a row for each value in our data array
    var row = tbody.append("tr");
    //Use object.entries to grab data from the array
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        //Append text and populate table with cell values
        var cell = row.append("td");
        cell.text(value);
    });
});

//Select the filter button
var button = d3.select("#filter-btn");
button.on("click", function() {
    
}