// This is a test file by Erendiz to check if API works

console.log("File loaded");

var url = "/api/v1.0/contracts";
d3.json(url).then(data=>{
  console.log(data);
})
// d3.json(url).then((incomingData) => {
//     console.log("HI", incomingData);
  
//     // // Use filter() to pass the function as its argument
//     // var filteredMovies = incomingData.filter(filterMovieRatings);
  
//     // //  Check to make sure your are filtering your movies.
//     // console.log(filteredMovies);
  
//     // // Use the map method with the arrow function to return all the filtered movie titles.
//     // var titles = filteredMovies.map(movies =>  movies.title);
  
//     // // Use the map method with the arrow function to return all the filtered movie metascores.
//     // var ratings = filteredMovies.map(movies => movies.metascore);
  
//     // // Check your filtered metascores.
//     // console.log(ratings);
  
//     // // Create your trace.
//     // var trace = {
//     //   x: titles,
//     //   y: ratings,
//     //   type: "bar"
//     // };
  
//     // // Create the data array for our plot
//     // var data = [trace];
  
//     // // Define the plot layout
//     // var layout = {
//     //   title: "The highest critically acclaimed movies.",
//     //   xaxis: { title: "Title" },
//     //   yaxis: { title: "Metascore (Critic) Rating"}
//     // };
  
//     // // Plot the chart to a div tag with id "bar-plot"
//     // Plotly.newPlot("bar-plot", data, layout);
//   });
  