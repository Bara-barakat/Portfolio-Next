// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Link from "next/link";
// import Image from "next/image";
// import Script from "next/script";
// import Toggle from "./toggle";

// import Splash from "./splashscreen/page";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Portfolio",
//   description:
//     "We specialize in website programming and development, providing clean code and pixel-perfect design I can create any project you want in a very short time.",
//   image: "/pb/public/AllIMGN/logo",
//   keywords: [
//     "Next.js",
//     "Blog",
//     "Bara",
//     "portfolio",
//     "website",
//     "Full Stack Developer",
//   ],
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <link rel="icon" href="/AllIMGN/logo.png" />

//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         <Splash />

//         <nav>
//           <div className="typing-container">
//             {/* <Image
//               src="/AllIMGN/Bara-min.png"
//               alt="B"
//               width={200}
//               height={200}
//             /> */}
//             <img src="/AllIMGN/Bara-min.png" alt="B" />
//             <h1>
//               <span>a</span>
//               <span>r</span>
//               <span>a</span>
//             </h1>
//           </div>
//           <Toggle />
//         </nav>

//         {children}
//       </body>
//     </html>
//   );
// }

import {
  Geist,
  Geist_Mono,
  Bungee_Spice,
  Ga_Maamli,
  Playwrite_AU_SA,
} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Toggle from "./toggle";

import Splash from "./splashscreen/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bungeeSpice = Bungee_Spice({
  variable: "--font-bungee-spice",
  subsets: ["latin"],
  weight: "400",
});

const gaMaamli = Ga_Maamli({
  variable: "--font-ga-maamli",
  subsets: ["latin"],
  weight: "400",
});

const playwriteAU = Playwrite_AU_SA({
  variable: "--font-playwrite-au-sa",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Portfolio",
  description:
    "We specialize in website programming and development, providing clean code and pixel-perfect design I can create any project you want in a very short time.",
  image: "/pb/public/AllIMGN/logo",
  keywords: [
    "Next.js",
    "Blog",
    "Bara",
    "portfolio",
    "website",
    "Full Stack Developer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/AllIMGN/logo.png" />

      <body
        onContextMenu="return false"
        className={`${geistSans.variable} ${geistMono.variable} ${bungeeSpice.variable} ${gaMaamli.variable} ${playwriteAU.variable}`}
      >
        <Splash />

        <nav>
          <div className="typing-container">
            <img src="/AllIMGN/Bara-min.png" alt="B" />
            <h1>
              <span>a</span>
              <span>r</span>
              <span>a</span>
            </h1>
          </div>
          <Toggle />
        </nav>

        {children}
      </body>
    </html>
  );
}
