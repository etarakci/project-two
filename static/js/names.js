var url = "/api/v1.0/police";
//need victim_name

var pageID =  document.getElementById("page-contents");

axios.get(url)
  .then(function (response) {
    // handle success
    // console.log(response);
    var namelist = [];
    var data = response.data.slice(0,200);
    data.forEach(entry => {
        let col = document.createElement("div");
        col.classList.add("col-md-3");
        col.classList.add("col-xs-6");
        col.classList.add("name");
                if (entry.victim_name != "Unknown" && entry.victim_name != "Name withheld by police"){
                    namelist.push(entry.victim_name);
                    let content = document.createTextNode(entry.victim_name);
                    col.appendChild(content);
                    pageID.appendChild(col);
                }
    }) 
    console.log(namelist);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })



// namelist = []
// d3.json(url).then(data => {
//     //name of first entry
//     console.log(data[0]);
//     
//     })
// })
// // console.log(namelist);
// var svgContainer = d3.select("body").select("#page-contents")
//                     .append("svg")
//                     .attr("width", "100%")
//                     .attr("heigth","100%");


// // var tbody = d3.select("tbody");

// // namelist.forEach((name) => {
// //     var row = tbody.append("tr");
// //     var cell = row.append("td");
// //     cell.text(name);
// //   });

// namelist.forEach(name => {
//     svgContainer.selectAll("text")
//                     .data(name)
//                     .enter()
//                     .append("text");
// })
