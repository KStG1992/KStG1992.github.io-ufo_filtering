// Select the Filter Search Bar
let input = d3.select("#datetime");
// Select the Filter Button
let button = d3.select("#filter-btn");
// Select the Reset Button
let reset_button = d3.select("#reset-btn");

// Creating Event Handler
input.on("submit", filterTable);
button.on("click", filterTable);
reset_button.on("click", resetTable);

// Creating Function to Render Data Table
function renderTable(ufo_data) {
    // Referencing the Table Body
    let tbody = d3.select("tbody");
    // Clearing Table Before Rendering
    tbody.html("");
    
    // Looping Through tableData
    ufo_data.forEach((ufoSightings) => {
        // Appending Table Rows for each ufoSiting object
        let row = tbody.append("tr");
        // Using Object.entries to console.log the keys and values
        Object.entries(ufoSightings).forEach(([key, value]) => {
            //Appending Cell to Row for Each Value
            let cell = row.append("td");
            cell.text(value);
        });
    });
}

// Creating Function to Filter Data Table
function filterTable() {
    // Prevent Page from Refreshing
    d3.event.preventDefault();
    // Getting Value Property
    let inputValue = input.property("value");
    // Filtering Data Based on Input
    let filterData = data.filter(sighting => sighting.datetime === inputValue);
   // Calling Function to Build Table with Filter Data
    renderTable(filterData);   
}

// Creating Function to Reset Filter Data Table and Input
function resetTable() {
    renderTable(data);
    document.getElementById('datetime').value = ''
}

// Calling Function
renderTable(data);