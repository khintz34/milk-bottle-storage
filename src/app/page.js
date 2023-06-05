"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import {
  format,
  subDays,
  differenceInDays,
  differenceInMonths,
} from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns/esm";

export default function Home() {
  const [countOfBricks, setCountOfBricks] = useState(8);
  const [ozPerBrick, setOzPerBrick] = useState(60);
  const [totalOzSaved, setTotalOzSaved] = useState(0);
  const [bottlesPerDay, setBottlesPerDay] = useState(1);
  const [ozPerBottle, setOzPerBottle] = useState(6);
  const [daysOfSavedMilk, setDaysOfSavedMilk] = useState(0);
  const [stopPumpingDate, setStopPumpingDate] = useState(new Date());
  const [ozSavedPerDay, setOzSavedPerDay] = useState(10);
  const [milkEndDate, setMilkEndDate] = useState(new Date("2/11/24"));

  useEffect(() => {
    console.log(countOfBricks * ozPerBrick);
    setTotalOzSaved(countOfBricks * ozPerBrick);
  }, [countOfBricks, ozPerBrick]);

  useEffect(() => {
    setDaysOfSavedMilk(totalOzSaved / (bottlesPerDay * ozPerBottle));
  }, [bottlesPerDay, totalOzSaved, ozPerBottle]);

  useEffect(() => {
    let endDate = milkEndDate;
    let startDate = addDays(new Date(), daysOfSavedMilk);
    console.log("startDate: ", startDate);
    console.log("endDate:", milkEndDate);

    let daysDif = differenceInDays(endDate, startDate);

    let neededOzPerDay = bottlesPerDay * ozPerBottle;
    let endNumber = daysDif * neededOzPerDay;
    let startNumber = 0;
    console.log("daysDif: ", daysDif);
    console.log("EndNum: ", endNumber);
    let days = 0;

    for (let i = 0; i < daysDif * neededOzPerDay; i++) {
      console.log(startNumber, endNumber, days);
      if (startNumber < endNumber) {
        days++;
        endNumber -= neededOzPerDay;
        startNumber += ozSavedPerDay;
      } else {
        break;
      }
    }

    console.log((daysDif - days) * neededOzPerDay);

    console.log("DAYS: ", days);

    setStopPumpingDate(addDays(startDate, days));
    console.log("STOP DATE", addDays(new Date(), days));
    console.log("------------------------");
  }, [
    daysOfSavedMilk,
    milkEndDate,
    ozPerBottle,
    bottlesPerDay,
    countOfBricks,
    ozPerBrick,
    ozSavedPerDay,
  ]);

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
          <DatePicker
            selected={milkEndDate}
            onChange={(date) => setMilkEndDate(date)}
          />
        </div>
        {/* <div>Pump End Date: {stopPumpingDate}</div> */}
      </form>
    </main>
  );
}

//! note
// find date of milk end then add oz per day needed to current date and subtract from end date until they are equal
