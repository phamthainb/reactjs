import * as React from "react";
import * as d3 from "d3";
import * as scale from "d3-scale";
import * as shape from "d3-shape";

const data = [
  { date: new Date("2007-04-23T00:00:00.000Z"), value: 93.24 },
  { date: new Date("2007-04-24T00:00:00.000Z"), value: 95.35 },
  { date: new Date("2007-04-25T00:00:00.000Z"), value: 98.84 },
  { date: new Date("2007-04-26T00:00:00.000Z"), value: 99.92 },
  { date: new Date("2007-04-29T00:00:00.000Z"), value: 99.8 },
  { date: new Date("2007-05-01T00:00:00.000Z"), value: 99.47 },
  { date: new Date("2007-05-02T00:00:00.000Z"), value: 100.39 },
  { date: new Date("2007-05-03T00:00:00.000Z"), value: 100.4 },
  { date: new Date("2007-05-04T00:00:00.000Z"), value: 100.81 },
  { date: new Date("2007-05-07T00:00:00.000Z"), value: 103.92 },
  { date: new Date("2007-05-08T00:00:00.000Z"), value: 105.06 },
  { date: new Date("2007-05-09T00:00:00.000Z"), value: 106.88 },
  { date: new Date("2007-05-09T00:00:00.000Z"), value: 500.34 },
  { date: new Date("2007-05-10T00:00:00.000Z"), value: 108.74 },
  { date: new Date("2007-05-13T00:00:00.000Z"), value: 109.36 },
  { date: new Date("2007-05-14T00:00:00.000Z"), value: 107.52 },
  { date: new Date("2007-05-15T00:00:00.000Z"), value: 400.34 },
  { date: new Date("2007-05-16T00:00:00.000Z"), value: 109.44 },
  { date: new Date("2007-05-17T00:00:00.000Z"), value: 110.02 },
  { date: new Date("2007-05-20T00:00:00.000Z"), value: 111.98 },
  { date: new Date("2007-05-21T00:00:00.000Z"), value: 113.54 },
  { date: new Date("2007-05-22T00:00:00.000Z"), value: 112.89 },
];
const margin = { top: 20, right: 30, bottom: 30, left: 40 };
const padding = { top: 20, right: 30, bottom: 30, left: 40 };
const height = 500;
const width = 500;

function drawChart() {
  const scaleX = scale
    .scaleTime()
    .domain([data[0].date, data[data.length - 1].date])
    .range([0, width]);
  // scaleY
  const scaleY = scale
    .scaleLinear()
    .domain([
      0,
      Math.max.apply(
        Math,
        data.map(function (o) {
          return o.value;
        })
      ),
    ])
    .range([500, 0]);
  // line
  const line = shape
    .line()
    .x((d: any) => scaleX(d.date))
    .y((d: any) => scaleY(d.value))
    .curve(shape.curveNatural)(data as any) as string;

  const svg = d3
    .select(document.getElementById("chart"))
    .style("-webkit-tap-highlight-color", "transparent")
    .style("overflow", "visible");

  // svg.append("g").call(xAxis);

  // svg.append("g").call(yAxis);

  svg
    .append("path")
    // .datum(data)
    .attr("fill", "transparent")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("d", line);

  const tooltip = svg.append("g");
  const callout = (props: any) => {
    console.log(props);
  };
  svg.on("touchmove mousemove", function (event) {
    // const { date, value } = bisect(d3.pointer(event, this)[0]);
    console.log("event", event);

    tooltip
      // .attr("transform", `translate(${x(date)},${y(value)})`)
      .call(callout, "value");
  });

  svg.on("touchend mouseleave", () => tooltip.call(callout, null));
}

const Chart: React.FunctionComponent = () => {
  React.useEffect(() => {
    drawChart();
  }, []);
  return (
    <svg id="chart" width={width} height={500} style={{ padding: "50px" }}>
      {/* <path
        d={drawChart()}
        stroke="#367be2"
        fill="transparent"
        strokeWidth="4"
      /> */}
    </svg>
  );
};

export default Chart;
