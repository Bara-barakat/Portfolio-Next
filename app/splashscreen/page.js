"use client";

import { useState, useEffect } from "react";
import "./stylesplash.css";

export default function Splash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && (
        <div className="splash-screen">
          <div className="container">
            <h1>
              <span className="word word1">Welcome </span>
              <span className="word word2">To </span>
              <span className="word word3">My</span>
              <br />
              <span className="word word4">Portfolio </span>
              <span className="word word5">Website</span>
              <span className="word word6">!</span>
            </h1>
          </div>
        </div>
      )}
    </>
  );
}
