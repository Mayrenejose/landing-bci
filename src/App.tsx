import { InformationBox } from "./components/InformationBox"
import { BoxButtons } from "./components/boxButtons";

function App() {
  return (
    <div className="app">
      <div className="app__filter">
        <div>
          <BoxButtons />
        </div>
        <div>segunda parte</div>
        <div className="app__filter--InformationBox">
          <InformationBox />
        </div>
      </div>
    </div>
  );
}

export default App;
