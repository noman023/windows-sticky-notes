import { useState } from "react";

// icons
import { LuPlus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";

// local component
import Editor from "./components/Editor";

function App() {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const handleClick = (bool) => {
    setIsEditorOpen(bool);
  };

  return (
    <>
      <main className="flex mt-8 gap-3">
        <section className="w-[500px] h-[800px] ml-[10%] border-2 p-3 border-gray-400 shadow-xl">
          {/* navigation bar */}
          <div className="flex justify-between text-3xl text-gray-500 mb-3">
            <div title="New Note">
              <LuPlus onClick={() => handleClick(true)} />
            </div>

            <div className="flex gap-4">
              <IoSettingsOutline />
              <RxCross2 />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-5">Sticky Notes</h1>

          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-200 border p-2 outline-none"
          />

          <p className="text-gray-500 text-xl m-[25%]">
            Tab the new note button above to create note
          </p>
        </section>

        {/* editor section */}
        <section>
          {isEditorOpen && <Editor updateEditorState={handleClick} />}
        </section>
      </main>
    </>
  );
}

export default App;
