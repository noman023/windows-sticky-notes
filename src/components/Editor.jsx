import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Editor({ updateNotes }) {
  const [isClosed, setIsClosed] = useState(false);
  const [text, setText] = useState("");

  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [lineThrough, setLineThrough] = useState(false);

  const handleClick = () => {
    setIsClosed(true);

    // updates notes if there is any text
    if (text.length > 0) {
      updateNotes(text);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <section
      className={`w-[400px] h-[400px]  border-2 border-gray-400 shadow-xl mb-2 ${
        isClosed && "hidden"
      }`}
    >
      {/* top settings options  */}
      <div className="h-[10%] flex justify-end bg-gray-200 text-3xl text-gray-500 p-1">
        <div className="flex gap-4 cursor-pointer hover:bg-gray-400 hover:text-white">
          <RxCross2 title="Close" onClick={handleClick} />
        </div>
      </div>

      {/* writing area */}
      <div className="h-[80%]">
        <textarea
          onChange={handleChange}
          name=""
          id=""
          placeholder="Take a note.."
          className={`w-full h-full outline-none p-4 border-b ${
            bold && "font-bold"
          } ${italic && "italic"} ${underline && "underline"} ${
            lineThrough && "line-through"
          }`}
        ></textarea>
      </div>

      {/* bottom styling options */}
      <div className="h-[10%] mt-1">
        <div className="flex justify-around text-xl h-full">
          <button
            onClick={() => setBold(!bold)}
            className="font-bold hover:bg-gray-300 w-10 h-[80%]"
            title="Bold"
          >
            B
          </button>

          <button
            onClick={() => setItalic(!italic)}
            className="italic hover:bg-gray-300 w-10 h-[80%]"
            title="Italic"
          >
            I
          </button>

          <button
            onClick={() => setUnderline(!underline)}
            className="underline hover:bg-gray-300 w-10 h-[80%]"
            title="Underline"
          >
            U
          </button>

          <button
            onClick={() => setLineThrough(!lineThrough)}
            className="line-through hover:bg-gray-300 w-10 h-[80%]"
            title="Strikethrough"
          >
            ab
          </button>
        </div>
      </div>
    </section>
  );
}

export default Editor;
