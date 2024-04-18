import Image from "next/image";

// COMPONENTS
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";

// STYLES
import "./font.css";
import styles from "./page.module.css";

// IMAGES
import logo from '../assets/LogoBlue.png'

export default function Home() {
  return (
    <div>
      <div className={styles.topContainer}>
        <Navbar />
        <Carousel />
        <div className={styles.topContent}>
          <div className={styles.topContentInner}>
            {/* <h1 className={styles.logo}>Logo</h1> */}
            <Image src={logo} alt="logo" className={styles.mainLogo} />
            <p className={styles.trust}>Guilt free, trusted nutrition.</p>
            <p className={styles.locationText}>Locations</p>
            <div className={styles.address}>
              <p className={styles.addressLine1}>2/447 Cambridge St, Floreat WA 6014</p>
              <p className={styles.addressLine2}>Pantai Pererenan No. 57, Pererenan, Bali 80351</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
