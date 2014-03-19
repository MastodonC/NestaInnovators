var width = 500,
    barHeight = 20;

var x = d3.scale.linear ()
	.range ([0, width]);

function individuals (div, data) {
    var x_extent = d3.extent(data, function(d){return d[2];});
    var x_scale = d3.scale.linear()
            .range([0,800])
            .domain(x_extent);

    d3.select(div)
	.selectAll("div")
	.data(data)
	.enter().append("div")
	.style("width", function(d) {return x_scale(d[2]);})
	.style ("height", "20px")
	.style ("font-size", "16px")
	.text(function(d) { return d[1]; });
};

function chart (div, data) {
    var x_extent = d3.extent(data, function(d){return d[1];});
    var x_scale = d3.scale.linear()
            .range([0,800])
            .domain(x_extent);

    d3.select(div)
	.selectAll("div")
	.data(data)
	.enter().append("div")
	.style("width", function(d) {return x_scale(d[1]);})
	.style ("height", "20px")
	.text(function(d) { return d[0]; })
	.style ("font-size", "16px");
}

function techChart (div, data) {
    var x_extent = d3.extent(data, function(d){return d[1];});
    var x_scale = d3.scale.linear()
            .range([0,800])
            .domain(x_extent);

    d3.select(div)
	.selectAll("div")
	.data(data)
	.enter().append("div")
	.style("width", function(d) { return x_scale(d[1]);})
	.style ("height", "20px")
	.text(function(d) { return d[0]; })
	.style ("font-size", "16px");
}
