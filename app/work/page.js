import "./stylework.css";
const W = "/AllIMGN/Component sk-min1.png";

const C = "/AllIMGN/ce/CleverM.png";
const Ce = "/AllIMGN/ce/Clever.png";
const Cer = "/AllIMGN/ce/clevermind.png";
const Cert = "/AllIMGN/ce/clevermi.png";
const Certi = "/AllIMGN/ce/clevermin.png";

export default function Work() {
  return (
    <div className="containerwork">
      <h2>Work Experience</h2>
      <p>
        Full Stack Developer | Clever Mind POB ICT, Amman 2024 – 2025 As a Full
        Stack Developer at Clever Mind POB ICT, I have contributed to the
        development of various dynamic websites and web applications, working on
        both front-end and back-end tasks. <br /> My role involved developing IT
        company websites, e-commerce platforms, and multi-vendor e-commerce
        sites.
      </p>
      <div className="imgwork">
        <img src={W} />
      </div>

      <h3>Certificat</h3>
      <div className="cework">
        <img src={C} />
        <img src={Ce} />
        <img src={Certi} />
        <img src={Cert} />
        <img src={Cer} />
      </div>
    </div>
  );
}
