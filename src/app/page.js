"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [countOfBricks, setCountOfBricks] = useState(0);
  const [ozPerBrick, setOzPerBrick] = useState(0);
  const [ozNeededPerDay, setOzNeededPerDay] = useState(0);
  const [daysOfSavedMilk, setDaysOfSavedMilk] = useState(0);
  const [stopPumpingDate, setStopPumpingDate] = useState(
    new Date(12 / 31 / 2023)
  );
  const [ozSavedPerDay, setOzSavedPerDay] = useState(0);
  const [milkEndDate, setMilkEndDate] = useState(new Date());

  useEffect(() => {
    console.log(countOfBricks * ozPerBrick);
  }, [countOfBricks, ozPerBrick]);

  return (
    <main className={styles.main}>
      <form action="">
        <div>
          <label htmlFor="countOfBricks">How many bricks do you have?</label>
          <input
            id="countOfBricks"
            type="num"
            value={countOfBricks}
            onChange={(e) => setCountOfBricks(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ozPerBrick">How many Oz per Brick?</label>
          <input
            id="ozPerBrick"
            type="num"
            value={ozPerBrick}
            onChange={(e) => setOzPerBrick(e.target.value)}
          />
        </div>
      </form>
    </main>
  );
}
