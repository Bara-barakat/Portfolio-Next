// "use client";
// import { useEffect } from "react";

// import "./stylece.css";
// const IT = "/AllIMGN/ce/IT-min.png";
// const P = "/AllIMGN/ce/P-min.jpg";
// const Agile = "/AllIMGN/ce/Agile-min.jpg";
// const IBM = "/AllIMGN/ce/ibm-min.png";
// const Meta = "/AllIMGN/ce/Meta-min.png";
// const Fullstack = "/AllIMGN/ce/fullstack.png";
// const Next = "/AllIMGN/ce/next.js.png";
// const RA = "/AllIMGN/ce/react api.png";
// const Redux = "/AllIMGN/ce/redux.png";
// const PHC = "/AllIMGN/ce/php class.png";
// const PHPsec = "/AllIMGN/ce/php sec-min.png";
// const Cymi = "/AllIMGN/ce/cybersecurity.png";
// const MIsec = "/AllIMGN/ce/secur.png";
// const Jira = "/AllIMGN/ce/jira-min.png";
// const JsA = "/AllIMGN/ce/4313693e-min.jpg";
// const So = "/AllIMGN/ce/SD-min.png";
// const U = "/AllIMGN/ce/UI  UX-min.jpg";

// export default function Certificat() {
//   useEffect(() => {
//     const elements = document.querySelectorAll(".fade-in");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     elements.forEach((element) => observer.observe(element));

//     return () => {
//       elements.forEach((element) => observer.unobserve(element));
//     };
//   }, []);

//   return (
//     <div className="containerce">
//       <h2>Certificat</h2>
//       <div className="img fade-in">
//         <img src={IT} />
//         <img src={P} />
//         <img src={Agile} />
//         <img src={IBM} />
//         <img src={Meta} />
//         <img src={Fullstack} />
//         <img src={Next} />
//         <img src={RA} />
//         <img src={Redux} />
//         <img src={PHC} />
//         <img src={PHPsec} />
//         <img src={Cymi} />
//         <img src={MIsec} />
//         <img src={Jira} />
//         <img src={JsA} />
//         <img src={So} />
//         <img src={U} />
//       </div>
//     </div>
//   );
// }

"use client";
import { useEffect } from "react";
import "./stylece.css";

export default function Certificat() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const images = [
    "/AllIMGN/ce/IT-min.png",
    "/AllIMGN/ce/P-min.jpg",
    "/AllIMGN/ce/Agile-min.jpg",
    "/AllIMGN/ce/ibm-min.png",
    "/AllIMGN/ce/Meta-min.png",
    "/AllIMGN/ce/fullstack.png",
    "/AllIMGN/ce/next.js.png",
    "/AllIMGN/ce/react api.png",
    "/AllIMGN/ce/redux.png",
    "/AllIMGN/ce/php class.png",
    "/AllIMGN/ce/php sec-min.png",
    "/AllIMGN/ce/cybersecurity.png",
    "/AllIMGN/ce/secur.png",
    "/AllIMGN/ce/jira-min.png",
    "/AllIMGN/ce/4313693e-min.jpg",
    "/AllIMGN/ce/SD-min.png",
    "/AllIMGN/ce/UI  UX-min.jpg",
  ];

  return (
    <div className="containerce">
      <h2>Certificat</h2>
      <div className="img fade-in">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Certificat Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
