import ApexLineChart from "./components/ApexLineChart";
import ApexPieChart from "./components/ApexPieChart";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="container">
      <SideBar />
      <div style={{
        display:'flex',
        flexDirection:'row',
        flex:1
      }}>
        <ApexLineChart />
        <ApexPieChart />
      </div>
    </div>
  );
}

export default App;
