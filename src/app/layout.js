import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Roboto} from "next/font/google"
import { PointsProvider } from "../context/PointsContext";


const roboto_init = Roboto({
  subsets:['latin'],
  weight:['100','300','700'],
  variable: '--font-roboto',
})


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Quiz App",
  description: "Quiz App For Students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${roboto_init.variable} ${geistMono.variable} antialiased`}
      >
        <PointsProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <SpeedInsights />
          <Footer />
        </PointsProvider>
      </body>
    </html>
  );
}
