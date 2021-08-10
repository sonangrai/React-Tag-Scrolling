import React from "react";
import styles from "../App.module.css";

const Tag = ({ data }) => {
  return (
    <li className={styles.listItem}>
      <a className={styles.link} href={data.url}>
        {data.title}
      </a>
    </li>
  );
};

export default Tag;
