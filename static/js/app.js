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
