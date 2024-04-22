import Image from "next/image";
import Head from "next/head";

// COMPONENTS
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";

// STYLES
import "./font.css";
import styles from "./page.module.css";

// IMAGES
import logo from "../assets/LogoBlue.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Page Title</title>
        <meta name="description" content="This is my page description." />
        <meta name="keywords" content="keyword1, keyword2, keyword3" />
        <meta name="author" content="John Doe" />
        <link rel="canonical" href="https://example.com/my-page" />
        <link rel="icon" href="./favicon.ico" sizes="any" />

        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/> */}
        </Head>
      </Head>
      <div>
        <div className={styles.topContainer}>
          <Navbar />
          <Carousel />
          <div className={styles.topContent}>
            <div className={styles.topContentInner}>
              {/* <h1 className={styles.logo}>Logo</h1> */}
              <Image src={logo} alt="logo" className={styles.mainLogo} />
              <p className={styles.trust}>
                Fuel Your Health, Ignite Your Potential.
              </p>
              <p className={styles.locationText}>Locations</p>
              <div className={styles.address}>
                <p className={styles.addressLine1}>
                  Jl. Sempol No.22, Pererenan, Kec. Mengwi, Kabupaten Badung,
                  Bali 80351, Indonesia
                </p>
                {/* <p className={styles.addressLine2}>
                  Pantai Pererenan No. 57, Pererenan, Bali 80351
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
