import { useState } from "react";

// icons
import { LuPlus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";

// local component
import Editor from "./components/Editor";

function App() {
  const [openEditors, setOpenEditors] = useState([]);
  const [notes, setNotes] = useState([]);

  const handleOpenEditor = () => {
    // on every click add text "open" to increase the array length
    setOpenEditors([...openEditors, "open"]);
  };

  const hanldeChange = (data) => {
    setNotes([data, ...notes]);
  };

  return (
    <>
      <main className="flex mt-8 gap-3">
        <section className="w-[400px] h-[600px] ml-[10%] border-2 p-3 border-gray-400 shadow-xl ">
          {/* top options bar */}
          <div className="flex justify-between text-3xl text-gray-500 mb-3">
            <div
              title="New Note"
              className="hover:text-gray-800 cursor-pointer"
            >
              <LuPlus onClick={handleOpenEditor} />
            </div>

            <div className="flex gap-4">
              <IoSettingsOutline
                title="Settings"
                className="hover:text-gray-800 cursor-pointer"
              />

              <RxCross2
                title="Close"
                className="hover:text-gray-800 cursor-pointer"
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-5">Sticky Notes</h1>

          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-200 border p-2 outline-none"
          />

          <div className="h-3/4 overflow-auto">
            {notes.length !== 0 ? (
              notes.map((note, idx) => (
                <div
                  key={idx}
                  className="min-h-14 max-h-40 border mt-3 p-3 overflow-hidden"
                >
                  <p className="break-words">{note}</p>
                </div>
              ))
            ) : (
              <p className="m-[20%] text-gray-400 text-xl">
                Tab the new note button above to create a new note
              </p>
            )}
          </div>
        </section>

        {/* editor section */}
        <section>
          {openEditors.length > 0 &&
            openEditors.map((count) => <Editor updateNotes={hanldeChange} />)}
        </section>
      </main>
    </>
  );
}

export default App;
