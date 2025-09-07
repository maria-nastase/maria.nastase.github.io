export default function About() {
    return (
    <div className="aboutme-section" id="about">
        <h1>About Me</h1>

        <div id="education">
            <h2>Education</h2>
            <div className="education-box">
                <h3>University of Waterloo</h3>
                <p>BASc in Systems Design Engineering, 2023 - Present</p>
                <p><a href="https://uwaterloo.ca/engineering/future-students/systems-design-engineering">Systems Design Engineering</a> is a unique program combining multiple engineering disciplines, mainly mechanical, electrical and software, in addition to mathematical modelling and human factors, for the design of complex systems. </p>
                <ul className="academic-stats" id="uwaterloo-grades">
                    <li>Cumulative Average: 92%</li>
                    <li>First in Class Engineering Scholarship for the 1B term</li>
                </ul>
            </div>
            
            <div className="education-box">
                <h3>York Mills Collegiate Institute</h3>
                <p>Ontario Secondary School Diploma with Honours French Immersion Certificate, 2019 - 2023</p>
                <ul className="academic-stats" id="ym-grades">
                    <li>University Admission Average: 99.2%</li>
                    <li>Governor General's Academic Medal for the highest average out of 200+ students in grades 11 and 12</li>
                </ul>
            </div>
        </div>

        <div className="aboutme-section" id="work-history">
            <h1>Work History</h1>
            <div className="work-box" id="aberger">
                <h3>Automation Engineering and Project Management Intern</h3>
                <p>A. Berger Precision, May 2025 - Aug. 2025</p>
            </div>

            <div className="work-box" id="hackerfab">
                <h3>Electrical/Hardware Engineering Team Member</h3>
                <p>Waterloo Hacker Fab, Jan. 2025 - Present</p>
            </div>

            <div className="work-box" id="teamworks">
                <h3>Software Implementation Specialist</h3>
                <p>Teamworks, Sep. 2024 - Dec. 2024</p>
            </div>

            <div className="work-box" id="uwaterloo">
                <h3>Information Technology Specialist</h3>
                <p>University of Waterloo, Jan. 2024 - Apr. 2024</p>
            </div>

        </div>
    </div>
    );
}
