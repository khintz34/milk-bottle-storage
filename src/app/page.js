"use client";
import styles from "./page.module.css";
import { useEffect, useState, useRef } from "react";
import {
  format,
  subDays,
  differenceInDays,
  differenceInMonths,
} from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns/esm";
import Header from "@/components/header";

export default function Home() {
  const [countOfBricks, setCountOfBricks] = useState(0);
  const [ozPerBrick, setOzPerBrick] = useState(0);
  const [totalOzSaved, setTotalOzSaved] = useState(0);
  const [bottlesPerDay, setBottlesPerDay] = useState(1);
  const [ozPerBottle, setOzPerBottle] = useState(6);
  const [daysOfSavedMilk, setDaysOfSavedMilk] = useState(0);
  const [stopPumpingDate, setStopPumpingDate] = useState();
  const [ozSavedPerDay, setOzSavedPerDay] = useState(10);
  const [milkEndDate, setMilkEndDate] = useState(new Date("2/11/24"));
  const [showCalcs, setShowCalcs] = useState(`${styles.hide}`);
  const [milkSaved, setMilkSaved] = useState(false);
  const formEndRef = useRef(null);

  useEffect(() => {
    setTotalOzSaved(countOfBricks * ozPerBrick);
  }, [countOfBricks, ozPerBrick]);

  useEffect(() => {
    setDaysOfSavedMilk(totalOzSaved / (bottlesPerDay * ozPerBottle));
  }, [bottlesPerDay, totalOzSaved, ozPerBottle]);

  function calculateMilkStff() {
    let endDate = milkEndDate;
    let startDate = addDays(new Date(), daysOfSavedMilk);
    let daysDif = differenceInDays(endDate, startDate);
    let neededOzPerDay = bottlesPerDay * ozPerBottle;
    let endNumber = daysDif * neededOzPerDay;
    let startNumber = 0;
    let days = 0;
    let fraction = ozSavedPerDay / neededOzPerDay;
    let peaked = false;
    let peakedDays;

    for (let i = 0; i < daysDif; i++) {
      if (!peaked) {
        if (startNumber < endNumber) {
          days++;
          endNumber -= neededOzPerDay;
          startNumber += ozSavedPerDay;
        } else {
          startNumber -= neededOzPerDay;
          days++;
          peaked = true;
          peakedDays = days;
        }
      } else {
        startNumber -= neededOzPerDay;
        days++;
      }
    }

    let objectDate = format(addDays(new Date(), peakedDays), "MMMM dd, yyyy");
    setStopPumpingDate(objectDate);
  }

  useEffect(() => {
    let elem = formEndRef.current;

    elem.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [showCalcs]);

  return (
    <main className={styles.main}>
      <form action="" className={styles.formMain}>
        <div className={styles.formQuestion}>
          <fieldset>
            <legend>Do you have any milk currently saved?</legend>
            <div className={styles.radioContainer}>
              <div>
                <label htmlFor="milkSavedYes">Yes</label>
                <input
                  name="savedMilk"
                  id="milkSavedYes"
                  type="radio"
                  checked={milkSaved === true}
                  onChange={(e) => {
                    setMilkSaved(true);
                    setShowCalcs(`${styles.hide}`);
                  }}
                  className={styles.formInputRadio}
                />
              </div>
              <div>
                <label htmlFor="milkSavedNo">No</label>
                <input
                  name="savedMilk"
                  id="milkSavedNo"
                  type="radio"
                  checked={milkSaved === false}
                  onChange={(e) => {
                    setMilkSaved(false);
                    setShowCalcs(`${styles.hide}`);
                    setCountOfBricks(0);
                    setOzPerBrick(0);
                  }}
                  className={styles.formInputRadio}
                />
              </div>
            </div>
          </fieldset>
        </div>
        {milkSaved ? (
          <div>
            <div className={styles.formQuestion}>
              <label htmlFor="countOfBricks">
                How many bricks do you have saved?
              </label>
              <input
                id="countOfBricks"
                type="num"
                value={countOfBricks}
                onChange={(e) => {
                  setCountOfBricks(Number(e.target.value));
                  setShowCalcs(`${styles.hide}`);
                }}
                className={`${styles.formInputNum} ${styles.inputBasic}`}
              />
            </div>
            <div className={styles.formQuestion}>
              <label htmlFor="ozPerBrick">How many Oz per Brick?</label>
              <input
                id="ozPerBrick"
                type="num"
                value={ozPerBrick}
                onChange={(e) => {
                  setOzPerBrick(Number(e.target.value));
                  setShowCalcs(`${styles.hide}`);
                }}
                className={`${styles.formInputNum} ${styles.inputBasic}`}
              />
            </div>
          </div>
        ) : (
          ""
        )}

        <div className={styles.formQuestion}>
          <label htmlFor="ozPerBottle">
            How many Oz per bottle after pumping stops?
          </label>
          <input
            id="ozPerBottle"
            type="num"
            value={ozPerBottle}
            onChange={(e) => {
              setOzPerBottle(Number(e.target.value));
              setShowCalcs(`${styles.hide}`);
            }}
            className={`${styles.formInputNum} ${styles.inputBasic}`}
          />
        </div>
        <div className={styles.formQuestion}>
          <label htmlFor="bottlesPerDay">
            How many bottles needed per day after pumping stops?
          </label>
          <input
            id="bottlesPerDay"
            type="num"
            value={bottlesPerDay}
            onChange={(e) => {
              setBottlesPerDay(Number(e.target.value));
              setShowCalcs(`${styles.hide}`);
            }}
            className={`${styles.formInputNum} ${styles.inputBasic}`}
          />
        </div>

        <div className={styles.formQuestion}>
          <label htmlFor="ozSavedPerDay">
            How many Oz are you saving per day?
          </label>
          <input
            id="ozSavedPerDay"
            type="num"
            value={ozSavedPerDay}
            onChange={(e) => {
              setOzSavedPerDay(Number(e.target.value));
              setShowCalcs(`${styles.hide}`);
            }}
            className={`${styles.formInputNum} ${styles.inputBasic}`}
          />
        </div>
        <div className={styles.formQuestion}>
          <label htmlFor="milkEndDate">
            When are you wanting your child to have milk until?
          </label>
          <DatePicker
            selected={milkEndDate}
            onChange={(date) => {
              setMilkEndDate(date);
              setShowCalcs(`${styles.hide}`);
            }}
            className={`${styles.formInputCal} ${styles.inputBasic}`}
          />
        </div>

        <div className={styles.formQuestion}>
          <button
            type="button"
            onClick={() => {
              calculateMilkStff();
              setShowCalcs(`${styles.show}`);
            }}
            className={styles.formBtn}
          >
            CALCULATE
          </button>
        </div>
        <div className={`${styles.formEnd} ${showCalcs}`} ref={formEndRef}>
          <div>Pump End Date: {stopPumpingDate}</div>
          {milkSaved ? (
            <div>
              <div className={styles.colorWhite}>
                Total Oz saved: {totalOzSaved}
              </div>
              <div className={styles.colorWhite}>
                Days of Saved Milk: {daysOfSavedMilk}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </form>
    </main>
  );
}
