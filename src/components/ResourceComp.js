"use client";
import react, { useState } from "react";
import styles from "../styles/Resources.module.css";

export default function Resource(props) {
  return (
    <main className={styles.main}>
      {props.name}: {props.url}
    </main>
  );
}
