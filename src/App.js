import TopBar from "./Components/Survey/TopBar";
import Details from "./Components/Details/Details";
import "./App.css";
import Experience from "./Components/Experience/Experience";
import TableDetails from "./Components/Table/TableDetails";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Details />
      <TableDetails />
      <Experience />
    </div>
  );
}

export default App;
