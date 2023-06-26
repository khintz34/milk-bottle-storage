"use client";
import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavbarStore } from "@/stores/navbarStore";

const Header = () => {
  const navbarStatus = useNavbarStore((state) => state.navbarStatus);
  const changeStatus = useNavbarStore((state) => state.changeStatus);

  const handleToggle = () => {
    if (navbarStatus === true) {
      changeStatus(false);
    } else {
      changeStatus(true);
    }
  };

  const closeMenu = () => {
    changeStatus(false);
  };

  return (
    <header className={`${styles.header}`}>
      <h1 className={styles.headerSize}>
        <Link href={"/"}>Milk Storage Calculator</Link>
      </h1>

      <div className={styles.keepRight}>
        {navbarStatus === false ? (
          <div className={`${styles.menuBtn}`}>
            <GiHamburgerMenu onClick={handleToggle} />
          </div>
        ) : (
          <div onClick={handleToggle} className={`${styles.xBtnContainer}`}>
            <div
              className={`${styles.iconWidth} ${styles.openBtn} ${styles.xBtn}`}
            >
              X
            </div>
          </div>
        )}
      </div>

      <div className={styles.sideNav}>
        <ul
          className={`${styles.menuNav} ${
            navbarStatus === true ? `${styles.showMenu}` : `${styles.hideNav}`
          }`}
        >
          <Link href={"/"} className=" whiteFont">
            <li
              className={`${styles.headerBtn} ${styles.menuItem}`}
              onClick={closeMenu}
            >
              Home
            </li>
          </Link>
          <Link href={"/FAQ"} className=" whiteFont">
            <li
              className={`${styles.headerBtn} ${styles.menuItem}`}
              onClick={closeMenu}
            >
              FAQs
            </li>
          </Link>
          <Link className=" whiteFont" href={"/Resources"}>
            <li
              className={`${styles.headerBtn} ${styles.menuItem}`}
              onClick={closeMenu}
            >
              Resources
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
