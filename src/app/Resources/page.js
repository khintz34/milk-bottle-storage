import react from "react";
import styles from "./page.module.css";
import Resource from "@/components/ResourceComp";

export default function Resources() {
  return (
    <main className={styles.main}>
      <Resource
        name="Exlclusive Pumping"
        url="https://exclusivepumping.com/breast-milk-freezer-stash-calculator/"
      />

      <Resource
        name="Woman Calculators"
        url="https://womencalculators.com/when-can-i-stop-pumping-calculator/"
      />

      <Resource
        name="Bumble Baby"
        url="https://bumblebabychicago.com/how-to-efficiently-store-breastmilk-how-to-make-breastmilk-bricks/#:~:text=What%20the%20heck%20is%20a,when%20you%20go%20to%20thaw!"
      />
    </main>
  );
}
