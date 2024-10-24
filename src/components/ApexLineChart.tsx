import { useState } from "react";
import ApexChart from "react-apexcharts";

export default function ApexLineChart() {
  const [chartSeries, setChartSeries] = useState([
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60, 70, 20],
    },
  ]);

  return (
    <div
      style={{
        flex: 1,
      }}
    >
      <ApexChart
        series={chartSeries}
        type="line"
        options={{
          chart: {
            zoom: {
              enabled: true,
            },
            // background:'green',
            toolbar: {
              show: true,
              // autoSelected:'zoom'
            },
          },
          dataLabels: {
            enabled: false,
            background: {
              //   borderColor: "#e05151",
              // padding: 50,
              borderWidth: 0,
              borderRadius: 20,
              enabled: true,
              dropShadow: {
                blur: 5,
                color: "#53c8ff",
                enabled: true,
                left: 3,
                opacity: 5,
                top: 2,
              },
            },
            textAnchor: "middle",
            distributed: true,
          },
          stroke: {
            show: true,
            colors: ["#3578f5"],
            curve: "straight",
            width: [3],
            dashArray: [0],
          },
          title: {
            text: "ApexCharts LineChart",
            align: "left",
            floating: true,
            // offsetY:10,
            // offsetX:10,
            style: {
              fontFamily:'malgun' 
            },
            // margin:50
          },
          //   legend: {
          //     tooltipHoverFormatter: function (val, opts) {
          //       return (
          //         val +
          //         " - <strong>" +
          //         opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
          //         "</strong>"
          //       );
          //     },
          //     floating: true,
          //     position: "bottom",
          //     show: true,
          //   },
          markers: {
            size: 0,
            // size: [20],
            // shape:'diamond',
            hover: {
              //   sizeOffset: 6,
            },
          },
          xaxis: {
            categories: [
              "01 Jan",
              "02 Jan",
              "03 Jan",
              "04 Jan",
              "05 Jan",
              "06 Jan",
              "07 Jan",
              "08 Jan",
              "09 Jan",
              "10 Jan",
              "11 Jan",
              "12 Jan",
            ],
          },
          yaxis: {
            tickAmount: 3,
          },
          tooltip: {
            y: [
              {
                title: {
                  formatter: function (val) {
                    return val + " (Hello)";
                  },
                },
              },
              {
                title: {
                  formatter: function (val) {
                    return val + " per session";
                  },
                },
              },
              {
                title: {
                  formatter: function (val) {
                    return val;
                  },
                },
              },
            ],
          },
          grid: {
            // borderColor: "#e09797",
            // column: {
            //     colors: ['#0000ff','#00ff00', '#ff0000'],
            //     opacity:5
            // }
            padding: {
              //   top: 10,
              // bottom:10
            },
          },
        }}
      />
    </div>
  );
}
