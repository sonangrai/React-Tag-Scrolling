import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./App.module.css";

const TagSlider = ({ data, myStyle, PreviousBtn, NextBtn }) => {
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

  useEffect(() => {
    //Check width of the scollings
    if (
      scrl.current &&
      scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
    return () => {};
  }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);

  if (data) {
    return (
      <div className={styles.tagSlider + " " + myStyle}>
        {scrollX !== 0 && (
          <button className={styles.prev} onClick={() => slide(-50)}>
            {PreviousBtn}
          </button>
        )}
        <ul className={styles.lists} ref={scrl} onScroll={scrollCheck}>
          {data.map((d) => (
            <li className={styles.listItem} key={d.id}>
              <a className={styles.link} href={d.url}>
                {d.title}
              </a>
            </li>
          ))}
        </ul>
        {!scrolEnd && (
          <button className={styles.next} onClick={() => slide(+50)}>
            {NextBtn}
          </button>
        )}
      </div>
    );
  } else {
    return (
      <div className={styles.noData}>
        <span>Please feed me Data</span>
      </div>
    );
  }
};

TagSlider.propTypes = {
  data: PropTypes.array,
  style: PropTypes.string,
};

TagSlider.defaultProps = {
  myStyle: "tagSlider",
  PreviousBtn: "<",
  NextBtn: ">",
};
export default TagSlider;
