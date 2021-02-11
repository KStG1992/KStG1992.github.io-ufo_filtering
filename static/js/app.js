// from data.js
let tableData = data;

// Referencing the Table Body
let tbody = d3.select("tbody");

// Looping Through tableData
tableData.forEach((ufoSitings) => {
    // Appending Table Rows for each ufoSiting object
    let row = tbody.append("tr");
    // Using Object.entries to console.log the keys and values
    Object.entries(ufoSitings).forEach(([key, value]) => {
        //Appending Cell to Row for Each Value
        let cell = row.append("td");
        cell.text(value);
    });
});

// Select the Filter Search Bar
let datetime = d3.select("#datetime");

// Select the Button
let button = d3.select("#filter-btn");

// Creating Event Handler
datetime.on("submit", runEnter);
button.on("click", runEnter);

// Complete Event Handler Function
function runEnter() {
    
    // Prevent Page from Refreshing
    d3.event.preventDefault();

    // Selecting Input Element
    let inputElement = d3.select("#datetime");

    // Getting Value Property
    let inputValue = inputElement.property("value");
    // Filtering Data Based on Input
    let filterData = tableData.filter(siting => siting.datetime === inputValue);
    // Console.log filterData
    console.log(filterData);
}