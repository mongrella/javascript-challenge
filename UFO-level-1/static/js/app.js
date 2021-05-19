// from data.js
var tableData = data;
console.log(tableData);

// Create references to table body
var tbody = d3.select("tbody");


// Add columns with UFO sighting data
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    //Append empty rows
    var row = tbody.append("tr");
    //Use object.entries to grab data
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        //Append cell to rows
        var cell = row.append("td");
        cell.text(value);
    });
});



    //tbody.append("tr");

    //for (key in row){
        //const cell = tbody.append("td");
        //cell.text(row[key]);
    //}
//});

