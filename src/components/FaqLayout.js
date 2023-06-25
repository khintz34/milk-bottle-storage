"use client";
import react, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import styles from "../styles/FaqLayout.module.css";

export default function FaqLayout(props) {
  const [down, setDown] = useState(true);
  const [hidden, setHidden] = useState(`${styles.hide}`);

  function handleToggle() {
    if (down) {
      setDown(false);
      setHidden(`${styles.show}`);
    } else {
      setDown(true);
      setHidden(`${styles.hide}`);
    }
  }

  return (
    <main className={styles.main}>
      <div
        className={`${styles.container} ${heightStyle}`}
        onClick={handleToggle}
      >
        <div className={styles.questionContainer}>
          <div className={styles.question}>{props.question}</div>
          {/* <div>{down ? <FaCaretDown /> : <FaCaretUp />}</div> */}
          <div>x</div>
        </div>
        <div className={`${styles.answer} ${hidden}`}>{props.answer}</div>
      </div>
    </main>
  );
}
