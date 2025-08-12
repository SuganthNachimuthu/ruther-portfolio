import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';
import School from '../assets/icons/school.svg?react';
import College from '../assets/icons/college.svg?react';
import Learning from '../assets/learning.svg?react';
import '../styles/education.css';

export default function Education() {
    return (
        <div id="education" className='section education-section'>
            <h2>Education</h2>
            <div className='education'>
                <div className="illustration">
                    <Learning />
                </div>
                <div className='details'>
                    <Timeline>
                        <TimelineItem icon={<School />} bgColor="#444444">
                            <h4>Ponnu Matriculation Higher Secondary School, Dharapuram</h4>
                            <TimeStamp stamp="2018 - 2019" />
                            <p>10th grade percentage: 80.85%</p>
                            <TimeStamp stamp="2020 - 2021" />
                            <p>12th grade percentage: 89.6%</p>
                        </TimelineItem>
                        <TimelineItem icon={<College />} bgColor="#444444">
                            <h4>Kongu Arts and Science College(Autonomous), Erode</h4>
                            <p>BCA</p>
                            <TimeStamp stamp="2021 - 2024" />
                            <p>CGPA: 7.5</p>
                            <h4>Dr.Mahalingam College of Engineering and Technology, Coimbatore</h4>
                            <p>MCA</p>
                            <TimeStamp stamp="2024 - 2026" />
                            <p>CGPA: 8.4 Still</p>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    )
}
