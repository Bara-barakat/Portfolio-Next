// export default function Blog() {
//   return (
//     <div className="blog">
//       <img
//         style={{
//           width: "100%",
//           height: "550px",
//         }}
//         src="/AllIMGN/animation-404-error-page.gif"
//         alt="img"
//       />

//       <h2
//         style={{
//           position: "absolute",
//           top: "84%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           fontSize: "1.4em",
//           color: "#fff",
//           backgroundColor: "rgba(0, 0, 0, 0.5)",
//           opacity: 0.7,
//           padding: "10px 20px",
//           borderRadius: "10px",
//           textAlign: "center",
//         }}
//       >
//         We are working on improving the website, thank you for your patience!
//       </h2>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";

export default function Blog() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize();

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div className="blog">
      <img
        style={{
          width: "100%",
          height: "550px",
        }}
        src="/AllIMGN/animation-404-error-page.gif"
        alt="img"
      />

      <h2
        style={{
          position: "absolute",
          width: "300px",
          top: isMobile ? "70%" : "84%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "1.4em",
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          opacity: 0.7,
          padding: "10px 20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        We are working on improving the website, thank you for your patience!
      </h2>
    </div>
  );
}
