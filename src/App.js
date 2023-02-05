import { useState } from "react";
import Switch from "react-switch";
import "./App.css";

export default function App() {
  //
  const [fastCursor, setFastCursor] = useState(false);
  const [goodCursor, setGoodCursor] = useState(false);
  const [cheapCursor, setCheapCursor] = useState(false);
  //
  const zeroOrOne = () => Math.floor(Math.random() * 2);
  //

  return (
    <div className="App">
      <section className="section">
        <div className="item">
          {/* first button ---------------------------------------------- */}
          <div
            className="fastB"
            onClick={() => {
              if (goodCursor && cheapCursor) {
                if (zeroOrOne() === 0) {
                  setCheapCursor(false);
                } else setGoodCursor(false);
              }
              setFastCursor(!fastCursor);
            }}
          >
            <Switch checked={fastCursor} />
            <p>FAST</p>
          </div>

          {/* second button ---------------------------------------------- */}
          <div
            className="goodB"
            onClick={() => {
              if (fastCursor && cheapCursor) {
                if (zeroOrOne() === 0) {
                  setCheapCursor(false);
                } else setFastCursor(false);
              }
              setGoodCursor(!goodCursor);
            }}
          >
            <Switch checked={goodCursor} />
            <p>GOOD</p>
          </div>

          {/* third button ---------------------------------------------- */}
          <div
            className="cheapB"
            onClick={() => {
              if (goodCursor && fastCursor) {
                if (zeroOrOne() === 0) {
                  setGoodCursor(false);
                } else setFastCursor(false);
              }
              setCheapCursor(!cheapCursor);
            }}
          >
            <Switch checked={cheapCursor} />
            <p>CHEAP</p>
          </div>
        </div>
      </section>
    </div>
  );
}
