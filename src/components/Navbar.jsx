"use client";

import React, { useCallback, useEffect, useState } from "react";
import { saveAs } from "file-saver";
import Image from "next/image";

// STYLES
import styles from "../app/page.module.css";

// ICONS
import { FiDownload } from "react-icons/fi";
import logo from "../assets/LogoBlue.png";
import { FaInstagram } from "react-icons/fa6";

// PDF

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const downloadPDF = useCallback(async () => {
    const pdfUrl = "./menu.pdf";
    // const pdfResponse = await fetch(pdfUrl);
    // if (!pdfResponse.ok) {
    //   throw new Error("Failed to preload the PDF file");
    // }
    window.open(pdfUrl, "_blank");
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
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <button className={styles.menuPdfButton} onClick={downloadPDF}>
          View Menu
        </button>
        <FaInstagram
          style={{ fontSize: "25px", color: "white", cursor: "pointer " }}
        />
      </div>
      <div className={`${styles.navbarDropDown}`}>
        <div className={styles.navbarDropDownInner}>
          <div className={styles.dropDownMenuPdfContainer}>
            <div
              className={styles.dropDownMenuPdfContainerInner}
              onClick={downloadPDF}
            >
              <h1 className={styles.dropDownMenuPdf}>Menu</h1>
              <FiDownload className={styles.downloadLogo} />
            </div>
          </div>
          <div className={styles.navbarDropDownDetails}>
            {/* <h1 className={styles.navbarDropDownLogo}>Logo</h1> */}
            <Image src={logo} alt="Logo" className={styles.mainLogo} />
            {/* <div>
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
            <hr className={styles.horizontailRow} /> */}
            <p className={styles.greytext}>
              <span className={styles.locationSpan}>Monday - Sunday : </span>
              10am - 10pm
            </p>
            <p className={styles.greytext}>
              <span className={styles.locationSpan}>Location: </span> Jl. Sempol
              No.22, Pererenan, Kec. Mengwi, Kabupaten Badung, Bali 80351,
              Indonesia
            </p>
            <p className={styles.greytext}>
              <span className={styles.locationSpan}>Email: </span>
              Healthfuel@resiliency.id
            </p>
            <p className={styles.greytext}>
              <span className={styles.locationSpan}>Whatsapp: </span>
              +61419538030
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
