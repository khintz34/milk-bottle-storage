"use client";
import react from "react";
import styles from "../styles/FaqLayout.module.css";

export default function FaqLayout(props) {
  return (
    <main className={styles.main}>
      <div className={styles.question}>{props.question}</div>
      <div className={styles.answer}>{props.answer}</div>
    </main>
  );
}
