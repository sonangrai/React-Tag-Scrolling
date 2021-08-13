import React from "react";
import PropTypes from "prop-types";
import styles from "./App.module.css";
import { useState, useRef } from "react";

const TagSlider = ({ data, style, PreviousBtn, NextBtn }) => {
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
    <div className={styles.tagSlider + " " + style}>
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
};

TagSlider.propTypes = {
  data: PropTypes.array,
  style: PropTypes.string,
};

TagSlider.defaultProps = {
  data: [
    {
      id: 1,
      title: "apple",
      url: "#!",
    },
    {
      id: 2,
      title: "apricot",
      url: "#!",
    },
    {
      id: 3,
      title: "avocado",
      url: "#!",
    },
    {
      id: 4,
      title: "banana",
      url: "#!",
    },
    {
      id: 5,
      title: "bell pepper",
      url: "#!",
    },
    {
      id: 6,
      title: "bilberry",
      url: "#!",
    },
    {
      id: 7,
      title: "blackberry",
      url: "#!",
    },
    {
      id: 8,
      title: "blackcurrant",
      url: "#!",
    },
    {
      id: 9,
      title: "coconut",
      url: "#!",
    },
    {
      id: 10,
      title: "cranberry",
      url: "#!",
    },
    {
      id: 11,
      title: "cucumber",
      url: "#!",
    },
    {
      id: 12,
      title: "currant",
      url: "#!",
    },
    {
      id: 13,
      title: "damson",
      url: "#!",
    },
    {
      id: 14,
      title: "date",
      url: "#!",
    },
    {
      id: 15,
      title: "dragonfruit",
      url: "#!",
    },
    {
      id: 16,
      title: "durian",
      url: "#!",
    },
    {
      id: 17,
      title: "eggplant",
      url: "#!",
    },
    {
      id: 18,
      title: "elderberry",
      url: "#!",
    },
    {
      id: 19,
      title: "feijoa",
      url: "#!",
    },
    {
      id: 20,
      title: "fig",
      url: "#!",
    },
    {
      id: 22,
      title: "goji berry",
      url: "#!",
    },
    {
      id: 23,
      title: "gooseberry",
      url: "#!",
    },
    {
      id: 24,
      title: "grape",
      url: "#!",
    },
    {
      id: 25,
      title: "grapefruit",
      url: "#!",
    },
    {
      id: 26,
      title: "guava",
      url: "#!",
    },
    {
      id: 27,
      title: "honeydew",
      url: "#!",
    },
    {
      id: 28,
      title: "huckleberry",
      url: "#!",
    },
    {
      id: 29,
      title: "jackfruit",
      url: "#!",
    },
    {
      id: 30,
      title: "jambul",
      url: "#!",
    },
  ],
  style: "tagSlider",
  PreviousBtn: "<",
  NextBtn: ">",
};
export default TagSlider;
