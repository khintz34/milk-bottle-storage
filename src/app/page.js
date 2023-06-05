"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { format, subDays } from "date-fns";

export default function Home() {
  const [countOfBricks, setCountOfBricks] = useState(12);
  const [ozPerBrick, setOzPerBrick] = useState(60);
  const [totalOzSaved, setTotalOzSaved] = useState(0);
  const [bottlesPerDay, setBottlesPerDay] = useState(1);
  const [ozPerBottle, setOzPerBottle] = useState(8);
  const [daysOfSavedMilk, setDaysOfSavedMilk] = useState(0);
  const [stopPumpingDate, setStopPumpingDate] = useState();
  const [ozSavedPerDay, setOzSavedPerDay] = useState(12);
  const [milkEndDate, setMilkEndDate] = useState(new Date("2/11/24"));

  useEffect(() => {
    console.log(countOfBricks * ozPerBrick);
    setTotalOzSaved(countOfBricks * ozPerBrick);
  }, [countOfBricks, ozPerBrick]);

  useEffect(() => {
    setDaysOfSavedMilk(totalOzSaved / (bottlesPerDay * ozPerBottle));
  }, [bottlesPerDay, totalOzSaved, ozPerBottle]);

  useEffect(() => {
    // let newDate = format(new Date(milkEndDate - daysOfSavedMilk), "yyyy-MM-dd");
    // let newDate = new Date(milkEndDate - daysOfSavedMilk);
    let newDate = subDays(milkEndDate, daysOfSavedMilk);
    console.log(newDate);
    if (newDate !== "Invalid Date") {
      setStopPumpingDate(newDate);
    }
  }, [daysOfSavedMilk, milkEndDate]);

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
        <div>Total Oz saved: {totalOzSaved}</div>
        <div>
          <label htmlFor="ozPerBottle">
            How many Oz per Bottle after pumping stops?
          </label>
          <input
            id="ozPerBottle"
            type="num"
            value={ozPerBottle}
            onChange={(e) => setOzPerBottle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bottlesPerDay">
            How many bottles needed per day after pumping stops?
          </label>
          <input
            id="bottlesPerDay"
            type="num"
            value={bottlesPerDay}
            onChange={(e) => setBottlesPerDay(e.target.value)}
          />
        </div>
        <div>Days of Saved Milk: {daysOfSavedMilk}</div>
        <div>
          <label htmlFor="ozSavedPerDay">
            How many Oz are you saving per day?
          </label>
          <input
            id="ozSavedPerDay"
            type="num"
            value={ozSavedPerDay}
            onChange={(e) => setOzSavedPerDay(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="milkEndDate">
            When are you wanting your child to have milk until?
          </label>
          <input
            id="milkEndDate"
            type="date"
            value={milkEndDate}
            onChange={(e) =>
              setMilkEndDate(format(new Date(e.target.value), "yyyy-MM-dd"))
            }
          />
        </div>
        {/* <div>Pump End Date: {stopPumpingDate}</div> */}
      </form>
    </main>
  );
}
