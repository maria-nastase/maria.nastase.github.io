import Navbar from "@/components/navbar";
import Timeline from "@/components/timeline";

export default function About() {
    return (
    <div className="aboutme-section" id="about">
        <Navbar />

        <h2 className="text-5xl font-bold mb-6 ml-4">About Me</h2>

        <div id="education">
            <h3 className="about-subheading font-bold ml-4 mb-4">Education</h3>
            <div className="education-box glass-card mb-10 ml-6 p-4">
                <h3>University of Waterloo</h3>
                <h4>BASc in Systems Design Engineering, 2023 - Present</h4>
                <p><a href="https://uwaterloo.ca/engineering/future-students/systems-design-engineering">Systems Design Engineering</a> is a unique program combining multiple engineering disciplines (mainly mechanical, electrical and software), in addition to mathematical modelling and human factors for the design of complex systems. </p>
                <ul className="academic-stats" id="uwaterloo-grades">
                    <li>Cumulative Average: 92%</li>
                    <li>First in Class Engineering Scholarship for the 1B term</li>
                </ul>
            </div>
            
            <div className="education-box glass-card mb-10 ml-6 p-4">
                <h3>York Mills Collegiate Institute</h3>
                <h4>Ontario Secondary School Diploma, 2019 - 2023</h4>
                <ul className="academic-stats" id="ym-grades">
                    <li>University Admission Average: 99.2%</li>
                    <li>Governor General&#39;s Academic Medal for the highest average out of 200+ students in grades 11 and 12</li>
                    <li>French Immersion</li>
                </ul>
            </div>
        </div>

        <div className="aboutme-section" id="work-history">
            <h3 className="about-subheading font-bold ml-4 mb-4">Work History</h3>

            <Timeline />

        </div>
    </div>
    );
}
