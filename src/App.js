import React from "react";
import styles from "./App.module.css";
import data from "./fruits.json";
import Tag from "./component/Tag";
import { useState, useRef } from "react";

export default function App() {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      scrl.current.scrollWidth - scrl.current.scrollLeft ===
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      scrl.current.scrollWidth - scrl.current.scrollLeft ===
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div className={styles.App}>
      {scrollX !== 0 && (
        <button className={styles.prev} onClick={() => slide(-50)}>
          <i className="fa fa-angle-left"></i>
        </button>
      )}
      <ul ref={scrl} onScroll={scrollCheck}>
        {data.fruits.map((d, i) => (
          <Tag data={d} key={i} />
        ))}
      </ul>
      {!scrolEnd && (
        <button className={styles.next} onClick={() => slide(+50)}>
          <i className="fa fa-angle-right"></i>
        </button>
      )}
    </div>
  );
}
