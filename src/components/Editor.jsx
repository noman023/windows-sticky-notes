import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Editor({ updateEditorState }) {
  const [isClosed, setIsClosed] = useState(false);

  const handleClick = () => {
    setIsClosed(true);
    updateEditorState(false);
  };

  return (
    <section
      className={`w-[450px] h-[400px]  border-2 border-gray-400 shadow-xl ${
        isClosed && "hidden"
      }`}
    >
      {/* navigation bar */}
      <div className="h-[10%] flex justify-end bg-gray-200 text-3xl text-gray-500 p-1 ">
        <div className="flex gap-4 ">
          <RxCross2 onClick={handleClick} />
        </div>
      </div>

      <div className="h-[80%]">
        <textarea
          name=""
          id=""
          placeholder="Take a note.."
          className="w-full h-full outline-none p-4"
        ></textarea>
      </div>

      <div className="h-[10%]">
        <h1>B</h1>
      </div>
    </section>
  );
}

export default Editor;
