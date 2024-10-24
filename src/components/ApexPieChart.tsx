import { useState } from "react";
import ApexChart from "react-apexcharts";

export default function ApexPieChart() {
  const [chartSeries, setChartSeries] = useState([
    30, 40, 35, 50, 49, 60, 70, 20,
  ]);

  return (
    <div
      style={
        {
         flex:1,
        }
      }
    >
      <ApexChart
        series={chartSeries}
        type="donut"
        options={{
          chart: {
            type: "donut",
            zoom: {
              enabled: true,
            },
            // background:'green',
            toolbar: {
              show: true,
              // autoSelected:'zoom'
            },
          },
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 90,
            },
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
          tooltip: {
            y: [
              {
                title: {
                  formatter: function (val) {
                    return "asd";
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
        }}
      />
    </div>
  );
}
