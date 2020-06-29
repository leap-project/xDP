//import {} from "";

d3.json('data.json', function (error,data) {

  function tabulate(data, columns) {
		var table = d3.select('body').append('table')
		var thead = table.append('thead')
		var	tbody = table.append('tbody');


        console.log(columns);
        d3.select("p")
        .on("click", function() {
            data=data.shift;
            });

		// append the header row
		thead.append('tr')
		  .selectAll('th')
		  .data(columns).enter()
		  .append('th')
		    .text(function (column) { return column; });
			console.log(thead);
		// create a row for each object in the data
		var rows = tbody.selectAll('tr')
		  .data(data)
		  .enter()
		  .append('tr');

		  console.log(rows);
		// create a cell in each row for each column
		var cells = rows.selectAll('td')
		  .data(function (row) {
		    return columns.map(function (column) {
		      return {column: column, value: row[column]};
		    });
		  })
		  .enter()
		  .append('td')
		    .text(function (d) { return d.value; });

	  return table;
    }

    

	// render the table(s)
    //tabulate(data, ['Name', 'PHN', 'Age', "Cans of Pop","Glucose Levels" ]); // 2 column table
    tabulate(data, ['Name', 'PHN', 'Age', "Cans of Pop","Glucose Levels" ]);


});