import React from "react";
import todos from "../store/todoStore";
import { observer } from "mobx-react-lite";
import { useState } from "react";

const Counter = observer(() => {
  const [addModal, setAddmodal] = useState(false);
  const [addName, setAddName] = useState("");
  console.log(todos.data);

  const [edditModal, setEdditModal] = useState(false);
  const [edditName, setEdditName] = useState("");
  const [idxxEd, setIdxxEd] = useState(null);

  const outputEdFunct = (element) => {
    console.log(element);

    setEdditModal(true);
    setEdditName(element.name);
    setIdxxEd(element.id);
  };

  const pageFunction = () => {
    const user = {
      id: Date.now(),
      name: addName,
    };
    todos.addFunc(user);
    setAddName("");
  };

  const editMainPage = () => {
    const user = {
      id: idxxEd,
      name: edditName,
    };
    todos.editStoreFunction(user);
    setEdditModal(false);
  };

  return (
    <div>
      {edditModal && (
        <div className="w-[30%] m-auto flex flex-col bg-gray-200 p-4 space-y-2 rounded drop-shadow-2xl drop-shadow-black/35">
          <input
            className="bg-gray-200 placeholder:p-1 h-8 rounded drop-shadow  drop-shadow-black/30"
            type="text"
            value={edditName}
            onChange={(e) => setEdditName(e.target.value)}
          />

          <div className="w-[90%] m-auto flex justify-around mt-2 mb-2">
            <button
              className="bg-green-600 w-fit p-0.5 rounded text-white border-b-2 border-black/30"
              onClick={() => editMainPage()}
            >
              soxr
            </button>
            <button
              className="bg-red-600 p-0.5 rounded text-white border-b-2 border-black/30"
              onClick={() => setEdditModal(false)}
            >
              otmena
            </button>
          </div>
        </div>
      )}

      {addModal && (
        <div className="w-[30%] m-auto flex flex-col bg-gray-200 p-4 space-y-2 rounded drop-shadow-2xl drop-shadow-black/35">
          <input
            className="bg-gray-200 placeholder:p-1 h-8 rounded drop-shadow  drop-shadow-black/30"
            type="text"
            placeholder="name"
            value={addName}
            onChange={(e) => {
              setAddName(e.target.value), console.log(addName);
            }}
          />
          <div className="w-[90%] m-auto flex justify-around mt-2 mb-2">
            <button
              className="bg-green-600 w-fit p-0.5 rounded text-white border-b-2 border-black/30"
              onClick={() => {
                pageFunction();
              }}
            >
              soxranit
            </button>
            <button
              onClick={() => setAddmodal(false)}
              className="bg-red-600 p-0.5 rounded text-white border-b-2 border-black/30"
            >
              otmena
            </button>
          </div>
        </div>
      )}
      <button
        className="bg-red-500 ml-2 mb-4 mt-2 p-0.5 rounded border-black/40 border-b-2 "
        onClick={() => setAddmodal(true)}
      >
        Add
      </button>

      <div className="flex w-[95%]  m-auto justify-between items-center flex-wrap gap-4  ">
        {todos.data.map((e) => {
          return (
            <div
              className="  w-[30%] text-center flex flex-col h-64 space-y-8   bg-gradient-to-r from-purple-700 to-pink-600 rounded-lg p-6 shadow-lg text-white"
              key={e.id}
            >
              <span className="w-fit  bg-gray-300/80 p-0.5 rounded ">
                {e.id}
              </span>
              <h1 className=" bg-gray-300/80 rounded">{e.name}</h1>
              <button
                className="bg-gradient-to-r from-red-500 to-black/60 rounded-lg p-1  shadow-lg text-white"
                onClick={() => todos.delete(e.id)}
              >
                del
              </button>
              <button
                className="bg-gradient-to-r from-green-400 to-green-800 rounded-lg p-1 shadow-lg text-white"
                onClick={() => outputEdFunct(e)}
              >
                ed
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Counter;
