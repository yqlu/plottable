// PLOTTABLE PERF TESTING FIDDLE

// WARNING: START WITH SMALL NUMBERS
// remember that the number of data points you're rendering is
// pts_array X ds_array * samples
// and the numbers add up quickly

// What Plot do you want to test the perf of? Type it exactly as it appears when you call Plottable.Plots._____();
var plotTypes = ["Scatter", "Area", "Line", "Bar", "StackedArea", "StackedBar", "ClusteredBar"]; 

// If you want to run the tests as if they're on a category axis (bar, stacked and clustered plots), set category to true. 
// Setting category to true makes the x-values the same across all datasets, and uses a Scales.Category for the xScale
var category = true;

// pts_array is an array of the number of points you'd like to compare to each other. 
// For example, if you only want to see an estimate of rendering time for 50,000 pts, pts_array = [50000]
// But if you want to compare render times of 100, 1000, and 10000 points, pts_array = [100, 1000, 10000]
var pts_array = [100];

// ds_array will take each value in pts_array above, and split that number of points into datasets
// If you aren't worried about dataset perf, use ds_array = [1]
// If you want to see how having 10 datasets compares to having 100 datasets, use ds_array = [10, 100]
var ds_array = [1, 10]; 

// How many times do you want each test to be run? Start with small numbers :) 
var samples = 10;




var render = function(plot, points, datasets){
  var ds_array = [];
    
  for( var i = 0; i < datasets; i++){
    var data = makeRandomData(points);
    if(category){
      for( var j = 0; j < points; j++){
        data[j].x = j.toString();
      }
    }    
    ds_array.push(new Plottable.Dataset(data));
  }
                         
  var xScale= category ? new Plottable.Scales.Category() : new Plottable.Scales.Linear();
  var yScale = new Plottable.Scales.Linear();
    
  for( var i = 0; i < datasets; i++ ){
    plot.addDataset(ds_array[i]); 
  }
  plot.x(function(d) { return d.x; }, xScale)
      .y(function(d) { return d.y; }, yScale);
  
  var start = Date.now();
  plot.renderTo("#chart");  
  var end = Date.now();  
  plot.destroy();
    
  return end - start;
    
}

var get_average = function(plotType, points, datasets){
  var total = 0;
  for( var i = 0; i < samples; i++){
    var newPlot = new Plottable.Plots[plotType]()
    total += render(newPlot, points, datasets);
    d3.select("#chart").text("");
  }  
  return total/samples;
}    


var render_results = function(result_data, plotType){

  var xScale = new Plottable.Scales.Linear();
  var yScale = new Plottable.Scales.Linear();
   
  var xAxis = new Plottable.Axes.Numeric(xScale, "bottom");
  var xAxisLabel = new Plottable.Components.AxisLabel("total number of points rendered", 0);
  var yAxis = new Plottable.Axes.Numeric(yScale, "left");
  var yAxisLabel = new Plottable.Components.AxisLabel("time to render (ms)", 270);
    
  var colorScale = new Plottable.Scales.Color();
  var csDomain = [];
  for(var i = 0; i < ds_array.length; i++){
    csDomain.push(ds_array[i].toString());      
  }      
  colorScale.domain(csDomain); 
  var legend = new Plottable.Components.Legend(colorScale);
  var legend_title = new Plottable.Components.AxisLabel("datasets", 0);
  var legend_table = new Plottable.Components.Table([[legend_title], [legend]]);  
  
  var titleString = "Time to render points on " + plotType + " Plots";
  var title_label = new Plottable.Components.TitleLabel(titleString, 0);  
    
  var dataset = new Plottable.Dataset(result_data);
    
  var results = new Plottable.Plots.Scatter()
    .addDataset(dataset)
    .x(function(d){
      return d.points * d.datasets;
    }, xScale)
    .y(function(d){
      return d.time;
    }, yScale)
    .size(15)
    .attr("fill", 
    function(d){
      return d.datasets.toString();
    }, colorScale);
    
  var table = new Plottable.Components.Table([[null, null, title_label, null],
                                              [yAxisLabel, yAxis, results, legend_table],
                                              [null, null, xAxis, null],
                                              [null, null, xAxisLabel, null]]);
    var svg = d3.select("#results")
        .append("svg")
        .attr("class", "result_plot")
        .attr("width", "50%")
        .attr("height", "600");
    svg.append("rect")
	    .attr("width", "100%")
	    .attr("height", "100%")
	    .attr("fill", "#ffffff");

    table.renderTo(svg);    

    
}   


var collect_data = function(plotType){
  var result_data = [];
    
  for( var i = 0; i < pts_array.length; i++){
    for( var j = 0; j < ds_array.length; j++){
      result_data.push({points: pts_array[i]/ds_array[j], datasets: ds_array[j], 
                    time: get_average(plotType, pts_array[i]/ds_array[j], ds_array[j])})         
    }    
  }      
  return result_data;  
}    


run = function() {
  for (var i = 0; i < plotTypes.length; i++){
    render_results(collect_data(plotTypes[i]), plotTypes[i]); 
  }
}