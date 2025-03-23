import "./stylehome.css";
const Cv = "/AllIMGN/Bara Barakat Full Stack.pdf";

export default function Home() {
  return (
    <div className="containerHome">
      <div className="containerHome__img">
        <img src="/AllIMGN/Component 2-min.png" alt="img" />
      </div>
      <div className="containerHome__text">
        <h1>
          Full-Stack Web Developer (<span>React/php</span>)
        </h1>
        <p>
          We specialize in website programming and development, providing clean
          code and pixel-perfect design I can create any project you want in a
          very short time.
        </p>

        <a href={Cv} target="_blank" rel="noopener noreferrer">
          <span class="letter">D</span>
          <span class="letter">o</span>
          <span class="letter">w</span>
          <span class="letter">n</span>
          <span class="letter">l</span>
          <span class="letter">o</span>
          <span class="letter">a</span>
          <span class="letter">d</span>
          <span class="letter">
            <p style={{ margin: 0, padding: "4px" }}></p>
          </span>
          <span class="letter">C</span>
          <span class="letter">V</span>
        </a>
      </div>
    </div>
  );
}
