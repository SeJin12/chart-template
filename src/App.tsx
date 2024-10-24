import ApexAreaChart from "./components/charts/ApexAreaChart";
import ApexBarChart from "./components/charts/ApexBarChart";
import ApexLineChart from "./components/charts/ApexLineChart";
import ApexPieChart from "./components/charts/ApexPieChart";
import HeaderBar from "./components/common/HeaderBar";
import SideBar from "./components/common/SideBar";

function App() {
  return (
    <div className="container">
      <SideBar />
      <div className="inner-container ">
        <HeaderBar />
        <div className="outlet">
          <div className="chart-row">
            <div className="chart-shape-box">
              <ApexLineChart type="line" />
            </div>
            <div className="chart-shape-box">
              <ApexAreaChart type="area" />
            </div>
          </div>
          <div className="chart-row">
            <div className="chart-shape-box">
              {/* <ApexPieChart /> */}
              <ApexBarChart />
            </div>
            <div className="chart-shape-box">
              <ApexPieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
