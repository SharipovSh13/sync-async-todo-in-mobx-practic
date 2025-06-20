import "./App.css";
import Counter from "./component/counter";
import AsyncTodoshka from "./component/asyncTodoshka";

function App() {
  return (
    <>
      <div className="bg-violet-100/60 p-2 mb-4">
        <Counter />
      </div>
      <div className="bg-gradient-to-r from-blue-500/80 to-violet-600 rounded p-4 shadow-lg text-white">
        <AsyncTodoshka />
      </div>
    </>
  );
}

export default App;
