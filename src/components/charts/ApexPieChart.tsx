import { useState } from "react";
import ApexChart from "react-apexcharts";

export default function ApexPieChart() {
  const [chartSeries, setChartSeries] = useState([30, 40, 35, 50]);

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
        type="pie"
        // width={"100%"}
        width={360}
        // height={"300px"}
        options={{
          chart: {
            type: "pie",
            // width: '100%',
            zoom: {
              enabled: true,
            },
            toolbar: {
              show: false,
              
              // offsetY: 10,
              // autoSelected:'zoom'
            },
            // background: "#ffa32d",
            // foreColor:"red"
            fontFamily: "malgun",
            animations: {
              enabled: true,
              easing: "easein",
              speed: 1000,
              animateGradually: {
                enabled: true,
                delay: 150,
              },
              dynamicAnimation: {
                enabled: true,
                speed: 350,
              },
            },
          },
          labels: ["네이버", "카카오", "삼성", "SK하이닉스"],
          colors: ["#1bf32c", "#f3cf1b", "#077ad5", "#f43405"],
          title: {
            text: "Pie Chart",
            style: {
              fontFamily: "malgun",
            },
          },
          dataLabels: {
            enabled: true,
            distributed: true,
            style: {
              fontFamily: "malgun",
              fontSize:"16px"
            },
          },
          legend: {
            show: true,
            position: "right",
            // offsetY: 20,
            floating: false,
            // width: 200
            // height: 0,
            // formatter: function (val, opts) {
            //   return val + " " + opts.w.globals.series[opts.seriesIndex];
            // },
          },
          plotOptions: {
            pie: {
              // offsetX: 0,
              offsetY: -30,

              dataLabels: {
                offset: -10,
              },
              expandOnClick: false,
              // customScale: 0.7,
            },
          },
          theme: {
            mode: "light",
          },
          grid: {
            padding: {
              top: 10,
              bottom: 0,
              left: 0,
              right: 0,
            },
          },
        }}
      />
    </div>
  );
}
