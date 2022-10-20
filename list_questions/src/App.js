import "./App.css";
import Questions from "./components/Questions";
import { buttonList, data } from "./data/data";


function App() {
  return (
    <div className="wrapper">
      <div className="listQuestions">
        <Questions
        items={data} 
        buttons={buttonList}>
        </Questions>
      </div>
    </div>
  );
}

export default App;
