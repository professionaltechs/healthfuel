"use client";

import React, { useCallback, useEffect, useState } from "react";
import { saveAs } from "file-saver";

// STYLES
import styles from "../app/page.module.css";

// ICONS
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const downloadPDF = useCallback(() => {
    const pdfUrl = "./menu.pdf";
    saveAs(pdfUrl, "menu.pdf");
  }, []);

  useEffect(() => {
    const dropDownElement = document.querySelector(`.${styles.navbarDropDown}`);
    const menuButton = document.querySelector(`.${styles.menuButton}`);
    if (navbarOpen) {
      menuButton.disabled = "disabled";
      menuButton.style.gap = "0px";
      menuButton.firstElementChild.style.transform = "translateY(1px)";
      menuButton.lastChild.style.transform = "translateY(-1px)";
      setTimeout(() => {
        menuButton.firstElementChild.style.rotate = "45deg";
        menuButton.lastChild.style.rotate = "-45deg";
      }, 500);
      setTimeout(() => {
        dropDownElement.style.top = "0px";
        menuButton.removeAttribute("disabled");
      }, 650);
      return;
    }
    menuButton.disabled = "disabled";
    menuButton.firstElementChild.style.rotate = "0deg";
    menuButton.lastChild.style.rotate = "0deg";
    setTimeout(() => {
      menuButton.firstElementChild.style.transform = "translateY(0px)";
      menuButton.lastChild.style.transform = "translateY(0px)";
      menuButton.style.gap = "6px";
    }, 400);
    setTimeout(() => {
      dropDownElement.style.top = "-100vh";
      menuButton.removeAttribute("disabled");
    }, 500);
  }, [navbarOpen]);

  return (
    <div className={styles.navbar}>
      <button
        className={styles.menuButton}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className={styles.menuBars}></div>
        <div className={styles.menuBars}></div>
      </button>
      <button className={styles.menuPdfButton} onClick={downloadPDF}>
        View Menu
      </button>
      <div className={`${styles.navbarDropDown}`}>
        <div className={styles.navbarDropDownInner}>
          <div className={styles.dropDownMenuPdfContainer}>
            <div
              className={styles.dropDownMenuPdfContainerInner}
              onClick={downloadPDF}
            >
              <h1 className={styles.dropDownMenuPdf}>Menu</h1>
              <FiDownload className={styles.downloadLogo}/>
            </div>
          </div>
          <div className={styles.navbarDropDownDetails}>
            <h1 className={styles.navbarDropDownLogo}>Logo</h1>
            <div>
              <p className={styles.greytext}>
                <span className={styles.locationSpan}>Monday: </span>Closed
              </p>
              <p className={styles.greytext}>
                <span className={styles.locationSpan}>Tuesday - Friday: </span>
                8am - 3pm
              </p>
              <p className={styles.greytext}>
                <span className={styles.locationSpan}>Saturday - Sunday:</span>
                7am - 3pm
              </p>
            </div>
            <p className={styles.greytext}>
              <span className={styles.locationSpan}>Saturday - Sunday:</span>7am
              - 3pm
            </p>
            <hr className={styles.horizontailRow} />
            <p className={styles.greytext}>
              <span className={styles.locationSpan}>Monday - Friday : </span>8am
              - 8pm
            </p>
            <p className={styles.greytext}>
              <span className={styles.locationSpan}>Location: </span> Pantai
              Pererenan No. 57, <br /> Pererenan, Bali 80351
            </p>
            <p className={styles.greytext}>
              <span className={styles.locationSpan}>Whatsapp: </span>
              +6285954959800
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
