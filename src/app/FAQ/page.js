import FaqLayout from "@/components/FaqLayout";
import react from "react";
import styles from "./page.module.css";

export default function Faq() {
  return (
    <main className={styles.main}>
      <FaqLayout
        question="What is a brick?"
        answer="It's a collection of frozen baggies that are placed in a big plastic bag to make a rectangle."
      />
      <FaqLayout
        question="What do I do if I start weaning?"
        answer="Simply reinput your information and see your new end date."
      />
      <FaqLayout
        question="Is this accurate?"
        answer="It is accurate based on the information provided. If you save less than the amount you input, then your end date will be off. This tool should be used as an estimate."
      />
    </main>
  );
}
