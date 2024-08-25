import { useState } from "react";

// icons
import { LuPlus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";

import { BsThreeDots } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

// local component
import Editor from "./components/Editor";

function App() {
  const [openEditors, setOpenEditors] = useState([]);
  const [notes, setNotes] = useState([]);

  const [hoveredNoteIndex, setHoveredNoteIndex] = useState(null);
  const [menuSelected, setMenuSelected] = useState(false);

  const handleOpenEditor = () => {
    // on every click add text "open" to increase the array length
    setOpenEditors([...openEditors, "open"]);
  };

  const handleCloseEditor = (index) => {
    // reduce array length when closing the editor
    const updatedEditors = openEditors.filter((_, idx) => idx !== index);
    setOpenEditors(updatedEditors);
  };

  const hanldeNotes = (data) => {
    setNotes([data, ...notes]);
  };

  const handleDeleteNote = (index) => {
    // Remove the note at the given index
    setNotes(notes.filter((_, idx) => idx !== index));
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

          {/* displays all notes */}
          <div className="h-3/4 overflow-auto">
            {notes.length !== 0 ? (
              notes.map((note, idx) => (
                <div
                  key={idx}
                  className="relative min-h-20 max-h-40 border mt-3 p-3 overflow-hidden"
                  onMouseEnter={() => setHoveredNoteIndex(idx)}
                  onMouseLeave={() => {
                    setHoveredNoteIndex(null);
                    setMenuSelected(false); // hide dropdown on mouse leave
                  }}
                >
                  {/* Three-dot menu on hover */}
                  {hoveredNoteIndex === idx && (
                    <div className="absolute top-1 right-1">
                      <BsThreeDots
                        className="cursor-pointer"
                        onClick={() => setMenuSelected(true)}
                      />
                    </div>
                  )}

                  {/* Dropdown menu */}
                  {hoveredNoteIndex === idx && menuSelected && (
                    <div className="w-40 absolute top-1 right-6 bg-white shadow-lg border rounded">
                      <button className="w-full flex gap-2 items-center px-2 py-1 text-left hover:bg-gray-200">
                        <IoOpenOutline /> Open note
                      </button>

                      <button
                        onClick={() => handleDeleteNote(idx)}
                        className="w-full flex gap-2 items-center px-2 py-1 text-left hover:bg-gray-200"
                      >
                        <RiDeleteBin6Line /> Delete note
                      </button>
                    </div>
                  )}

                  {/* displays note text */}
                  <p
                    className={`break-words ${note.bold && "font-bold"} 
                  ${note.italic && "italic"} ${note.underline && "underline"} ${
                      note.lineThrough && "line-through"
                    }`}
                  >
                    {note.text}
                  </p>
                </div>
              ))
            ) : (
              <p className="m-[20%] text-gray-400 text-xl">
                Tap the new note button above to create a new note.
              </p>
            )}
          </div>
        </section>

        {/* editor section */}
        <section>
          {openEditors.length > 0 &&
            openEditors.map((_, idx) => (
              <Editor
                key={idx}
                updateNotes={hanldeNotes}
                closeEditor={() => handleCloseEditor(idx)}
              />
            ))}
        </section>
      </main>
    </>
  );
}

export default App;
