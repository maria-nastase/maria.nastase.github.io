import Navbar from "@/components/navbar";
import Timeline from "@/components/timeline";

export default function About() {
    return (
    <div className="aboutme-section" id="about">
        <Navbar />

        <h1 className="text-2xl font-bold mb-6">About Me</h1>

        <div id="education">
            <h2>Education</h2>
            <div className="education-box">
                <h3>University of Waterloo</h3>
                <h4>BASc in Systems Design Engineering, 2023 - Present</h4>
                <p><a href="https://uwaterloo.ca/engineering/future-students/systems-design-engineering">Systems Design Engineering</a> is a unique program combining multiple engineering disciplines, mainly mechanical, electrical and software, in addition to mathematical modelling and human factors, for the design of complex systems. </p>
                <ul className="academic-stats" id="uwaterloo-grades">
                    <li>Cumulative Average: 92%</li>
                    <li>First in Class Engineering Scholarship for the 1B term</li>
                </ul>
            </div>
            
            <div className="education-box">
                <h3>York Mills Collegiate Institute</h3>
                <h4>Ontario Secondary School Diploma with Honours French Immersion Certificate, 2019 - 2023</h4>
                <ul className="academic-stats" id="ym-grades">
                    <li>University Admission Average: 99.2%</li>
                    <li>Governor General's Academic Medal for the highest average out of 200+ students in grades 11 and 12</li>
                </ul>
            </div>
        </div>

        <div className="aboutme-section" id="work-history">
            <h2>Work History</h2>

            <Timeline />

        </div>
    </div>
    );
}
