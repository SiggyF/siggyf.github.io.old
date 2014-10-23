(function(){

    var margin = {top: 40, right: 340, bottom: 40, left: 200},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scale.linear()
            .domain([1890, 2100])
            .range([0, width]);

    var y = d3.scale.linear()
            .domain([0, 100])
            .range([height, 0]);

    var svg = d3.select("#plot").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
        .attr("class", "axis axis--x")
        .attr('id', 'yaxis')
        .attr("transform", "translate(0," + height + ")")
        .call(
            d3.svg.axis()
                .scale(x)
                .orient("bottom")
                .tickValues([1900,1950, 2000, 2050, 2100])
                .tickFormat(d3.format('d'))
        )
        .append("text")
        .attr("x", width)
        .attr("y", -3)
        .style("text-anchor", "middle")
        .text("time [year]");

    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickValues([0, 50, 100]);

    yG = svg.append("g")
        .attr("class", "axis axis--y");
    yG
        .call(yAxis)
        .append("text")
        .attr("x", 6)
        .text("sea-surface height [cm]");

    var year = d3.range(1900,2000);
    var N = d3.random.normal(50, 10);
    var N2 = d3.random.normal(50, 10);
    var waterlevel = d3.range(100).map(function(){return N() ;});
    var residuals = d3.range(100).map(function(){return N2() ;});
    var rows = d3.zip(year, waterlevel);
    var rows2 = d3.zip(year, residuals);

    svg.append("path")
        .attr("class", "line")
        .attr("d", function() {
            return d3.svg.line()
                .x(function(d) { return x(d[0]); })
                .y(function(d) { return y(d[1]); })
            (rows);
        })
        .transition()
        .delay(3000)
        .duration(1500)
        .attr("d", function() {
            return d3.svg.line()
                .x(function(d) { return x(d[0]); })
                .y(function(d) { return y(d[1]); })
            (rows2);
        });
    y
        .domain([40, 60]);

    yAxis
        .tickValues([40, 50, 60]);
    yG
        .transition()
        .delay(3000)
        .duration(1500)
        .call(
            yAxis
        );



})();