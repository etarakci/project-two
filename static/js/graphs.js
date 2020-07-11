
Promise.all([
  d3.json("/api/v1.0/police"),
  d3.json("/api/v1.0/state")
]).then(function(data) {
  // console.log(data[0][0]);  // first row of police
  // console.log(data[1][0]);  // first row of states


 var countRace = {};

  // count how many race occurences in list and store in countRace
     data[0].forEach(function(d) {
      var race = d.victim_race;
      if(countRace[race] === undefined) {
          countRace[race] = 0;
      } else {
          countRace[race] = countRace[race] + 1;
      }
  });
  // now store the count in each data member
  data[0].forEach(function(d) {
      var race = d.victim_race;
      d.count = countRace[race];
});
        // console.log(countRace);


var countGender = {};

        // count how many race occurences in list and store in countGender
           data[0].forEach(function(d) {
            var gender = d.victim_gender;
            if(countGender[gender] === undefined) {
                countGender[gender] = 0;
            } else {
                countGender[gender] = countGender[gender] + 1;
            }
        });
        // now store the count in each data member
        data[0].forEach(function(d) {
            var gender = d.victim_gender;
            d.count = countGender[gender];
      });
              // console.log(countGender);


var raceKilled = Object.values(countRace);
// console.log(raceKilled);

var raceLabel = Object.keys(countRace);
// console.log(raceLabel);

var genderKilled = Object.values(countGender);
// console.log(genderKilled);

var genderLabel = Object.keys(countGender);
// console.log(genderLabel);


//Get state values
var states = [];

data[1].forEach(function(d) {
var state = d.state;
  states.push(state);
});
states.pop();
states.pop();
// console.log(states);

//Get population values;
var population = [];
data[1].forEach(function(d) {
  var pop = d.population;
  population.push(pop);
});
population.pop();
population.pop();

//console.log(population);


//Get the total number of police killings
var totalNumKilled = [];

data[1].forEach(function(d) {
  var totalNum = d.all_people_killed;
  totalNumKilled.push(totalNum);
});
totalNumKilled.pop();
totalNumKilled.pop();
// console.log(totalNumKilled);


//Get percent population of numbers killed per population

var per_capita = [];
//divide the total number killed by the total population times 100000
for(var i = 0; i < totalNumKilled.length; i++){
  per_capita.push(Number(totalNumKilled[i] / population[i]*100000).toFixed(2));
}
//console.log(per_capita);

//perCapitaRounded = per_capita.map(function(each_element){
 // return Number(each_element.toFixed(2));
//});

//console.log(perCapitaRounded);


var asiansKilled = [];

data[1].forEach(function(d) {
  var asianNum = d.asians_killed;
  asiansKilled.push(asianNum);
});

// console.log(asiansKilled);
asiansKilled.pop();
asiansKilled.pop();
// console.log(asiansKilled);

var blacksKilled = [];

data[1].forEach(function(d) {
  var blackNum = d.blacks_killed;
  blacksKilled.push(blackNum);
});

// console.log(blacksKilled);
blacksKilled.pop();
blacksKilled.pop();
// console.log(blacksKilled);

var hispanicsKilled = [];

data[1].forEach(function(d) {
  var hispanicsNum = d.hispanics_killed;
  hispanicsKilled.push(hispanicsNum);
});

// console.log(hispanicsKilled);
hispanicsKilled.pop();
hispanicsKilled.pop();
// console.log(hispanicsKilled);

var nativesKilled = [];

data[1].forEach(function(d) {
  var nativeNum = d.native_americans_killed;
  nativesKilled.push(nativeNum);
});
nativesKilled.pop();
nativesKilled.pop();
//console.log(nativesKilled);

var piNumKilled = [];

data[1].forEach(function(d) {
  var piNum = d.pacific_islanders_killed;
  piNumKilled.push(piNum);
});

// console.log(piNumKilled);
piNumKilled.pop();
piNumKilled.pop();
// console.log(piNumKilled);

var unknownKilled = [];

data[1].forEach(function(d) {
  var unknownNum = d.unknown_race_people_killed;
  unknownKilled.push(unknownNum);
});

// console.log(unknownKilled);
unknownKilled.pop();
unknownKilled.pop();
// console.log(unknownKilled);

var whitesKilled = [];

data[1].forEach(function(d) {
  var whiteNum = d.white_people_killed;
  whitesKilled.push(whiteNum);
});

// console.log(whitesKilled);
whitesKilled.pop();
whitesKilled.pop();
// console.log(whitesKilled);



//Create pie chart

var data1 = [{
    values: raceKilled,
    labels: raceLabel,
    type: "pie"
  }];

  var layout1 = {
    title: "U.S.Police Killings By Race",
    height: 400,
    width: 500
  };

  Plotly.newPlot("pie", data1, layout1);


//Create gender pie chart
var data2 = [{
  values: genderKilled,
  labels: genderLabel,
  type: "pie"
}];

var layout2 = {
  title: "U.S.Police Killings By Gender", 
  height: 400,
  width: 500
};

Plotly.newPlot("pie2", data2, layout2);

//Horizontal bar plot 

/*var data3 = [{
  type: 'bar',
  x: totalNumKilled,
  y: states,
  orientation: 'h'
}];
*/
var data3 = [{
  type: 'bar',
  x: states,
  y: per_capita
}];

var layout3 = {
  title: "U.S. Police Killings By State",
  yaxis: {title: "Police Killings per 100,000"},
  width: 1000,
  height: 600,
};

Plotly.newPlot('bar-plot', data3, layout3);


var trace1 = {
  x: asiansKilled,
  y: states,
  name: 'Asian',
  orientation: 'h',
  marker: {
    color: '#98abc5',
    width: 3
  },
  type: 'bar'
};

var trace2 = {
  x: blacksKilled,
  y: states,
  name: 'Black',
  orientation: 'h',
  type: 'bar',
  marker: {
    color: '#8a89a6',
    width: 3
  }
};

var trace3 = {
  x: hispanicsKilled,
  y: states,
  name: 'Hispanic',
  orientation: 'h',
  type: 'bar',
  marker: {
    color: '#7b6888',
    width: 1
  }
};

var trace4 = {
  x: nativesKilled,
  y: states,
  name: 'Native American',
  orientation: 'h',
  type: 'bar',
  marker: {
    color: '#6b486b',
    width: 1
  }
};

var trace5 = {
  x: piNumKilled,
  y: states,
  name: 'Pacific Islander',
  orientation: 'h',
  type: 'bar',
  marker: {
    color: '#a05d56',
    width: 1
  }
};

var trace6 = {
  x: unknownKilled,
  y: states,
  name: 'Unknown Race',
  orientation: 'h',
  type: 'bar',
  marker: {
    color: '#d0743c',
    width: 1
  }
};

var trace7 = {
  x: whitesKilled,
  y: states,
  name: 'White',
  orientation: 'h',
  type: 'bar',
  marker: {
    color: '#ff8c00',
    width: 1
  }
};

var data4 = [trace1, trace2,trace3,trace4,trace5,trace6,trace7];

var layout4 = {
  title: 'U.S. Police Killings By State and Race',
  xaxis: {title: "Total Killings By State"},
  width: 1000,
  height: 1000,
  barmode: 'stack'
};

Plotly.newPlot('hbar-plot2', data4, layout4);


        /*
        // Display the default plot
        function init() {
          var data = [{
            values: us,
            labels: numKilled,
            type: "pie"
          }];
        
          var layout = {
            height: 600,
            width: 800
          };
        
          Plotly.newPlot("pie", data, layout);
        }

        // On change to the DOM, call getData()
        d3.selectAll("#selDataset").on("change", getData);
        
        // Function called by DOM changes
        function getData() {
          var dropdownMenu = d3.select("#selDataset");
          // Assign the value of the dropdown menu option to a variable
          var dataset = dropdownMenu.property("value");
          // Initialize an empty array for the country's data
          var data = [];
        
          if (dataset == 'us') {
              data = us;
          }
          else if (dataset == 'uk') {
              data = uk;
          }
          else if (dataset == 'canada') {
              data = canada;
          }
          // Call function to update the chart
          updatePlotly(data);
        }
        
        // Update the restyled plot's values
        function updatePlotly(newdata) {
          Plotly.restyle("pie", "values", [newdata]);
        }
        
        init();
        
*/


});