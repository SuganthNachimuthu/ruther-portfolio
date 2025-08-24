import { Button1 } from '../components/Buttons'
import Pdf from "../assets/icons/pdf.svg?react";
import SvgIcon from '../components/SvgIcon';

export default function About() {


  return (
    <div id="about" className='about-section section'>
  <h2>About</h2>
  <p>
    I’m <a>Suganth N</a>, a <a>Full Stack Developer</a> skilled in both frontend and backend development, with expertise in 
    <a> HTML, CSS, JavaScript (ES6+), React.js, Node.js, Express.js, Python</a>, and <a>SQLite</a>. I specialize in building 
    scalable, responsive, and high-performance web applications, integrating <a>REST APIs</a>, ensuring cross-browser 
    compatibility, and optimizing user experiences with modern UI/UX practices.
  </p>
  <p>
    I’ve worked on impactful projects like <a href='https://mynewyoutube.ccbp.tech' target='_blank'>NXT Watch</a> and 
    <a href='https://nxttrendsgit.ccbp.tech' target='_blank'> NxtTrendz</a>, implementing secure authentication, state 
    management, and advanced search/filter features. My professional experience includes internships at 
    <a> CloudMation Solutions</a> and <a>Neha Solutions</a>, where I developed 
    RESTful APIs, and optimized full-stack applications for real-world use cases.
  </p>
  <p>
    Passionate about <a>Gen AI</a>, <a>prompt engineering</a>, and leveraging AI to enhance existing systems, I thrive in 
    collaborative environments and am constantly exploring emerging technologies. Let’s innovate together! ✨
  </p>
  <a href="https://drive.google.com/file/d/1frEEZGHfxhYL2rRSznoIivzFRcs91AUv/view?usp=sharing" target='_blank'>
    <Button1>
      <SvgIcon icon={Pdf} />
      Resume
    </Button1>
  </a>
</div>

  )
}
