"use client";
import react, { useState } from "react";
import styles from "../styles/Resources.module.css";

export default function Resource(props) {
  function openTab() {
    window.open(props.url);
  }
  return (
    <main className={styles.main}>
      <div onClick={openTab}>
        <h3 className={styles.h3}>{props.name}</h3>
        <p>{props.desc}</p>
      </div>
    </main>
  );
}
