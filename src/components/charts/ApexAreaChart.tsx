import { useState } from "react";
import ApexChart from "react-apexcharts";

interface AreaChartProps {
  type: "area";
}

export default function ApexAreaChart({ type }: AreaChartProps) {
  const [chartSeries, setChartSeries] = useState([
    {
      name: "Sales",
      data: [1000, 1200, 900, 1800, 3000, 4200, 5000, 8000, 12000],
    },
  ]);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <ApexChart
        series={chartSeries}
        type={type}
        // width={300}
        height={200}
        options={{
          chart: {
            // offsetY: 10,
            // offsetX: 0,
            zoom: {
              enabled: true,
            },
            // stacked:true,
            // background: "#ffa32d",
            toolbar: {
              show: false,
              offsetY: 10,
              // autoSelected:'zoom'
              tools: {
                download: true,
                pan: false,
                reset: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
              },
            },
            animations: {
              enabled: true,
              easing: "easeout",
              speed: 1000,
              animateGradually: {
                enabled: false,
                delay: 150,
              },
              dynamicAnimation: {
                enabled: true,
                speed: 350,
              },
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
            colors: ["#11a6bd"],
            curve: "smooth",
            width: [1],
            dashArray: [0],
          },
          title: {
            text: "AreaChart",
            align: "left",
            floating: true,
            // offsetY:10,
            // offsetX:10,
            style: {
              fontFamily: "malgun",
            },
            // margin:50
          },
          plotOptions: {
            pie: {
              offsetX: 0,
              offsetY: 10,
            },
          },
          fill: {
            type: "gradient", // 'gradient' / 'solid' / 'pattern' / 'image',
            colors: ["#11a6bd"],
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
            // categories: [
            //   "01 Jan",
            //   "02 Jan",
            //   "03 Jan",
            //   "04 Jan",
            //   "05 Jan",
            //   "06 Jan",
            //   "07 Jan",
            //   "08 Jan",
            //   "09 Jan",
            //   "10 Jan",
            //   "11 Jan",
            //   "12 Jan",
            // ],
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
            //   colors: ["#0000ff", "#00ff00", "#ff0000"],
            //   opacity: 5,
            // },
            padding: {
              top: 20,
              // bottom: 0,
              // left: 20,
              // right: 20,
            },
          },
        }}
      />
    </div>
  );
}