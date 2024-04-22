import { Exo } from "next/font/google";
import "./globals.css";
import "./font.css";
import favIcon from "../app/icon.ico";

const exo = Exo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  // icons: [{ rel: 'icon', url: favIcon }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>{children}</body>
    </html>
  );
}
