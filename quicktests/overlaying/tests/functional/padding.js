function makeData() {
  "use strict";
  return [makeRandomData(50), makeRandomData(50)];
}

function run(svg, data, Plottable) {
  "use strict";

  var dataseries1 = new Plottable.Dataset(data[0].slice(0, 10));

  var xScale = new Plottable.Scales.Linear();
  var yScale = new Plottable.Scales.Linear();
  var xAxis = new Plottable.Axes.Numeric(xScale, "bottom");
  var yAxis = new Plottable.Axes.Numeric(yScale, "left");

  var scatterPlot = new Plottable.Plots.Scatter().addDataset(dataseries1);
  scatterPlot.x(function(d) { return d.x; }, xScale).y(function(d) { return d.y; }, yScale);

  var bigVal = function(){ return [10]; };
  var negVal = function(){ return [-10]; };

  function addBigVal() {
    xScale.addIncludedValuesProvider(bigVal);
  }

  function removeBigVal() {
    xScale.removeIncludedValuesProvider(bigVal);
  }

  function padExceptionBig() {
    xScale.addPaddingExceptionsProvider(bigVal);
  }

  function removePadExpBig() {
    xScale.removePaddingExceptionsProvider(bigVal);
  }

  function addNegVal() {
    xScale.addIncludedValuesProvider(negVal);
  }

  function removeNegVal() {
    xScale.removeIncludedValuesProvider(negVal);
  }

  function padExceptionNeg() {
    xScale.addPaddingExceptionsProvider(negVal);
  }

  function removePadExpNeg() {
    xScale.removePaddingExceptionsProvider(negVal);
  }

  var addBig  = new Plottable.Components.Label("include big number", 0);
  var removeBig  = new Plottable.Components.Label("remove big number", 0);
  var addNeg  = new Plottable.Components.Label("include neg number", 0);
  var removeNeg  = new Plottable.Components.Label("remove neg number", 0);
  var addPadExceptionBig  = new Plottable.Components.Label("padding exception big", 0);
  var addPadExceptionNeg  = new Plottable.Components.Label("padding exception neg", 0);
  var removePadExceptionBig  = new Plottable.Components.Label("remove padding exception big", 0);
  var removePadExceptionNeg  = new Plottable.Components.Label("remove padding exception neg", 0);

  var labelTable = new Plottable.Components.Table([[addBig, addNeg],
                                                    [removeBig, removeNeg],
                                                    [addPadExceptionBig, addPadExceptionNeg],
                                                    [removePadExceptionBig, removePadExceptionNeg]
                                                  ]);

  var basicTable = new Plottable.Components.Table([
                                                    [yAxis, scatterPlot],
                                                    [null, xAxis],
                                                    [null, labelTable]
                                                  ]);

  basicTable.renderTo(svg);

  new Plottable.Interactions.Click().onClick(addBigVal).attachTo(addBig);
  new Plottable.Interactions.Click().onClick(removeBigVal).attachTo(removeBig);
  new Plottable.Interactions.Click().onClick(addNegVal).attachTo(addNeg);
  new Plottable.Interactions.Click().onClick(removeNegVal).attachTo(removeNeg);
  new Plottable.Interactions.Click().onClick(padExceptionBig).attachTo(addPadExceptionBig);
  new Plottable.Interactions.Click().onClick(padExceptionNeg).attachTo(addPadExceptionNeg);
  new Plottable.Interactions.Click().onClick(removePadExpBig).attachTo(removePadExceptionBig);
  new Plottable.Interactions.Click().onClick(removePadExpNeg).attachTo(removePadExceptionNeg);
}
