import "./App.css";
import Counter from "./component/counter";
import AsyncTodoshka from "./component/asyncTodoshka";

function App() {
  return (
    <>
      <div className="bg-violet-100/60 p-2 mb-4">
        <Counter />
      </div>
      <div className="bg-violet-400/40 p-2">
        <AsyncTodoshka />
      </div>
    </>
  );
}

export default App;
