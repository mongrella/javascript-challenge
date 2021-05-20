// from data.js
const tableData = data;
console.log(tableData);

// Create references to table body
var tbody = d3.select("tbody");


// Add columns with UFO sighting data
tableData.forEach(function(buildTable) {
    console.log(buildTable);
    //Append a row for each value in our data array
    var row = tbody.append("tr");
    //Use object.entries to grab data from the array
    Object.entries(buildTable).forEach(function([key, value]) {
        console.log(key, value);
        //Append text and populate table with cell values
        var cell = row.append("td");
        cell.text(value);
    });
});

//Select the filter button
var button = d3.select("#filter-btn");
button.on("click", function(handleClick) {

    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    // Filter data
    var filteredData = tableData.filter(sight => sight.datetime === inputValue);
    console.log(filteredData);
    
    //Rebuild the table using the filtered data (filteredData)
    //Take your filtered data and put into the buildTable to rebuild the table with filtered data

    filteredData.forEach(function(filteredTable) {
        console.log(filteredTable);
        var row = tbody.append("tr");
        Object.entries(filteredTable).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});