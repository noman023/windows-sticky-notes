import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Editor({ updateNotes }) {
  const [isClosed, setIsClosed] = useState(false);
  const [text, setText] = useState("");

  const [attributes, setAttributes] = useState({
    bold:false,
    italic:false,
    underline:false,
    lineThrough:false
  })

  const handleAttribute = (e) => {
    setAttributes(prev => {
      const attributeName = e.target.name
      
      return {
        ...prev,
        // set alter value for attibute's previous value
        [attributeName]: !prev[attributeName]
      }
    })

  }
  
  const handleClose = () => {
    setIsClosed(true);

    // updates notes if there is any text
    if (text.length > 0) {
      updateNotes({
        text,
        ...attributes
      });
    }
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
          <RxCross2 title="Close" onClick={handleClose} />
        </div>
      </div>

      {/* writing area */}
      <div className="h-[80%]">
        <textarea
          onChange={(e) => setText(e.target.value)}
          placeholder="Take a note.."
          className={`w-full h-full outline-none p-4 border-b ${
            attributes.bold && "font-bold"
          } ${attributes.italic && "italic"} ${attributes.underline && "underline"} ${
            attributes.lineThrough && "line-through"
          }`}
        ></textarea>
      </div>

      {/* bottom styling options */}
      <div className="h-[10%] mt-1">
        <div className="flex justify-around text-xl h-full">
          <button
            onClick={handleAttribute}
            name="bold"
            className="font-bold hover:bg-gray-300 w-10 h-[80%]"
            title="Bold"
          >
            B
          </button>

          <button
            onClick={handleAttribute}
            name="italic"
            className="italic hover:bg-gray-300 w-10 h-[80%]"
            title="Italic"
          >
            I
          </button>

          <button
          onClick={handleAttribute}
            name="underline"
            className="underline hover:bg-gray-300 w-10 h-[80%]"
            title="Underline"
          >
            U
          </button>

          <button
            onClick={handleAttribute}
            name="lineThrough"
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
