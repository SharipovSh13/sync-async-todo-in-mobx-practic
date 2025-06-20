import React from "react";
import { observer } from "mobx-react-lite";
import AsyncTodo from "./asyncStore";
import { useEffect, useState } from "react";

const AsyncTodoshka = observer(() => {
  useEffect(() => {
    AsyncTodo.get();
  }, []);

  const [addModal, setAddmodal] = useState(false);
  const [adName, setAdName] = useState("");

  const [edName, setEdname] = useState("");
  const [edModal, setEdmodal] = useState("");
  const [idxx, setIdxx] = useState(null);

  const addPage = () => {
    const user = {
      name: adName,
    };
    AsyncTodo.addFunc(user);
    setAddmodal(false);
    setAdName("");
  };

  const editPage = (element) => {
    setEdmodal(true);
    setEdname(element.name);
    setIdxx(element.id);
  };

  const editMain = () => {
    const user = {
      name: edName,
      id: idxx,
    };
    AsyncTodo.editor(user);
    setEdmodal(false);
  };

  return (
    <div>
      {addModal && (
        <div className="w-[40%] m-auto bg-gray-400/30 p-4 ">
          <input
            type="text"
            className="bg-gray-50 drop-shadow drop-shadow-black/30 w-[100%] m-auto placeholder:p-1 rounded h-8 mb-2"
            placeholder="name"
            value={adName}
            onChange={(e) => setAdName(e.target.value)}
          />
          <div className="w[90%] m-auto flex  justify-around">
            <button
              className="bg-green-500 p-1 rounded mt-2"
              onClick={() => addPage()}
            >
              soxr
            </button>
            <button
              className="bg-red-500 p-1 rounded mt-2"
              onClick={() => setAddmodal(false)}
            >
              cancel
            </button>
          </div>
        </div>
      )}
      {edModal && (
        <div className="w-[40%] m-auto bg-gray-400/30 p-4 ">
          <input
            type="text"
            className="bg-gray-50 drop-shadow drop-shadow-black/30 w-[100%] m-auto  rounded h-8 mb-2"
            placeholder="name"
            value={edName}
            onChange={(e) => setEdname(e.target.value)}
          />
          <div className="w[90%] m-auto flex  justify-around">
            <button
              className="bg-green-500 p-1 rounded mt-2"
              onClick={() => {
                editMain();
              }}
            >
              soxr
            </button>
            <button
              className="bg-red-500 p-1 rounded mt-2"
              onClick={() => setEdmodal(false)}
            >
              cancel
            </button>
          </div>
        </div>
      )}

      <button
        className="bg-gradient-to-r from-violet-500 to-te rounded p-1 shadow-lg text-white"
        onClick={() => {
          setAddmodal(true);
        }}
      >
        add
      </button>

      <div className=" w-[95%] m-auto  mt-4  grid grid-cols-3 gap-10 place-content-center  ">
        {AsyncTodo.data?.map((el) => {
          return (
            <div
              key={el.id}
              className="bg-gradient-to-r from-purple-700 to-pink-600 rounded-lg p-6 shadow-lg text-white h-32 flex flex-col space-y-4"
            >
              <h1>{el.name}</h1>
              <div
                className="bg-gradient-to-r from-gray-300 to-gray-200/60
               rounded border-b-2 border-black/10 flex justify-around p-1"
              >
                <button
                  className="w-fit p-1 bg-green-500 rounded"
                  onClick={() => AsyncTodo.delka(el.id)}
                >
                  del
                </button>
                <button
                  className="w-fit p-1 bg-red-500 rounded"
                  onClick={() => editPage(el)}
                >
                  ed
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default AsyncTodoshka;
