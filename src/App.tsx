import { InformationBox } from "./components/InformationBox"
import { BoxButtons } from "./components/boxButtons"
import { BoxCentral } from "./components/boxCentral";

function App() {
  return (
    <div className="app">
      <div className="app__filter">
        <div>
          <BoxButtons />
        </div>
        <div>
          <BoxCentral />
        </div>
        <div className="app__filter--InformationBox">
          <InformationBox />
        </div>
      </div>
    </div>
  );
}

export default App;
