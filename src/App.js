import logo from "./logo.svg";
import "./App.css";
import ShowerThoughts from "./ShowerThoughts";
import Buses from "./Buses";
import Clock from "./Clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
      </header>
      <body className="App-body">
        <ShowerThoughts />
        <Buses />
      </body>
    </div>
  );
}

export default App;
