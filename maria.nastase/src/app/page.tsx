export default function Home() {
    return (
      <div id="intro">
        <h1>Hi, I'm Maria.</h1>
        <h2>2B Systems Design Engineering Student @ UWaterloo</h2>
        <h2>Interested in Industrial Automation and Robotics</h2>
        <div id="links">
          <div className="socials"><a id="resume" href="\Maria Nastase Resume.pdf" target="_blank"><img src="document.svg"></img></a></div>
          <div className="socials"><a id="linkedin" href="https://www.linkedin.com/in/marianastase/" target="_blank"><img src="linkedin.svg"></img></a></div>
          <div className="socials"><a id="github" href="https://github.com/maria-nastase" target="_blank"><img src="github.svg"></img></a></div>
          <div className="socials"><a id="email" href="mailto:mnastase@uwaterloo.ca"><img src="email.png"></img></a></div>
        </div>
        <div id="pages">
          <div className="page-button"><a id="aboutme" href="\about">About Me</a></div>
          <div className="page-button"><a id="projects" href="\projects">Projects</a></div>
        </div>
      </div>
    );
  }
  