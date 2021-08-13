import React from "react";
import styles from "./App.module.css";
import data from "./fruits.json";
import Tag from "./component/Tag";
import { useState, useRef } from "react";

export default function TagSlider({ passedData }) {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
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
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
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
      <ul className={styles.lists} ref={scrl} onScroll={scrollCheck}>
        {(passedData || data).fruits.map((d) => (
          <Tag data={d} key={d.id} />
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
