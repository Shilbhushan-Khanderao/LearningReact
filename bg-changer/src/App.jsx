import { useState } from "react";
import "./App.css";
import { useColor, ColorPicker } from "react-color-palette";
import "react-color-palette/css";

function App() {
  const [color, setColor] = useColor(""); // upgrade with color picker library
  const [colorChange, setColorChange] = useState("olive"); //Simple implementation
  const [show, setShow] = useState(false); //handle color picker

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: show === true ? color.hex : colorChange }}
      >
        {show && (
          <div className="fixed flex top-5 w-full justify-center ">
            <div className="w-1/3">
              <ColorPicker
                color={color}
                onChange={setColor}
                hideInput={["rgb", "hsv"]}
                height={200}
              />
            </div>
          </div>
        )}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColorChange("red")}
              className="outline-none text-white px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColorChange("blue")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColorChange("green")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColorChange("gray")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
              style={{ backgroundColor: "gray" }}
            >
              Gray
            </button>
            <button
              onClick={() => setColorChange("yellow")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColorChange("pink")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => setColorChange("purple")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColorChange("lavender")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "lavender" }}
            >
              Lavender
            </button>
            <button
              onClick={() => setColorChange("white")}
              className="outline-none px-4 py-1 rounded-full shadow-lg"
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => setColorChange("black")}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setShow(!show)}
              className="outline-none px-4 py-1 text-white rounded-full shadow-lg"
              style={{ backgroundColor: "limegreen" }}
            >
              Pick your color
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
