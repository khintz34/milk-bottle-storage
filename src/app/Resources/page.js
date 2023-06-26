import react from "react";
import styles from "./page.module.css";
import Resource from "@/components/ResourceComp";

export default function Resources() {
  return (
    <main className={styles.main}>
      <Resource
        name="Exlclusive Pumping"
        url="https://exclusivepumping.com/breast-milk-freezer-stash-calculator/"
        desc="More information on storing breast milk and finding pump end date."
      />

      <Resource
        name="Woman Calculators"
        url="https://womencalculators.com/when-can-i-stop-pumping-calculator/"
        desc="When Can I Stop Pumping Calculator"
      />

      <Resource
        name="Bumble Baby"
        url="https://bumblebabychicago.com/how-to-efficiently-store-breastmilk-how-to-make-breastmilk-bricks/#:~:text=What%20the%20heck%20is%20a,when%20you%20go%20to%20thaw!"
        desc="How to store breast milk"
      />
    </main>
  );
}
