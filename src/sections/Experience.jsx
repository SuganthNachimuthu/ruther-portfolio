import Freelancing from '../assets/freelancing.svg?react';
import Opensource from '../assets/opensource.svg?react';
import '../styles/experience.css';
import Timeline from '../components/Timeline';
import TimelineItem from '../components/TimelineItem';
import { TimeStamp } from '../components/TimelineItem';
import Upwork from '../assets/icons/upwork.svg?react';
import Fiverr from '../assets/icons/fiverr.svg?react';
import Github from '../assets/icons/github.svg?react';
import Vinoai from '../assets/vinoai.avif'

export default function Experience() {
    return (
        <div id="work" className='experience-section section' style={{ paddingBottom: '0' }}>
            <h2>Work Experience</h2>
            <div className='experience'>
                <div className="illustration">
                    <Freelancing />
                </div>
                <div className='details'>
                    <h3>Internship</h3>
                    <p>I have worked on a variety of projects, including web development. I have experience working with clients from different parts of the world, and I have developed a strong understanding of the importance of communication and collaboration in remote work environments.</p>
                    <Timeline>
                        <TimelineItem icon={<Upwork />} color="#6fda44">
                            <h4>Software Engineer Intern, CloudMation</h4>
                            <TimeStamp stamp="Mar 2024 - Aug 2024" />
                            <p>- Applied Data Structures and Algorithms (DSA) in Python to solve performance-critical backend problems, improving 
code efficiency and scalability.<br></br> - Developed and maintained full-stack web applications using React.js (frontend) and Node.js with Express.js 
(backend), ensuring seamless user experience and optimized API integrations. <br></br> - Collaborated with senior engineers to design RESTful APIs, implement authentication, and manage state with modern 
React practices (hooks, context API). </p>
                        </TimelineItem>
                        <TimelineItem icon={<Fiverr />} color="#1dbf73">
                            <h4>Full Stack Developer Intern, Neha Solution</h4>
                            <TimeStamp stamp="May 2025 - Jul 2025" />
                            <p>-Built and deployed scalable full-stack applications using React.js and Node.js, integrating REST APIs and ensuring 
responsive, user-friendly interfaces.<br></br> - Secure authentication, optimized database schemas, and enhanced backend performance to support real-time data 
operations and seamless client-server communication. </p>
                        </TimelineItem>
                        
                    </Timeline>
                </div>
            </div>
            <div className='experience reverse'>
                <div className='details'>
                    <h3>Freelance</h3>
                    <p></p>
                    <Timeline>
                        <TimelineItem icon={<Fiverr/>} color="#0745a3">
                            <h4>Freelance - Full Stack Development Projects For College Students Using Prompt Engineering and My Real-Time Project Skillset</h4>
                            <TimeStamp stamp="2024 - now" />
                            <div className="projects-grid">
                                <div className="project-card" data-project="AuthEase">
                                    <h5>AuthEase</h5>
                                    <p>User Registration, Login & User Management with Admin Panel</p>
                                </div>
                                <div className="project-card" data-project="HostelHub">
                                    <h5>HostelHub</h5>
                                    <p>Complete Hostel Management System</p>
                                </div>
                                <div className="project-card" data-project="EduTrack">
                                    <h5>EduTrack</h5>
                                    <p>Student Record Management System</p>
                                </div>
                                <div className="project-card" data-project="MiniCRM">
                                    <h5>MiniCRM</h5>
                                    <p>Lightweight Customer Relationship Manager</p>
                                </div>
                                <div className="project-card" data-project="MediCarePro">
                                    <h5>MediCarePro</h5>
                                    <p>Hospital Management System</p>
                                </div>
                                <div className="project-card" data-project="ShopSphere">
                                    <h5>ShopSphere</h5>
                                    <p>Online Shopping Platform</p>
                                </div>
                                <div className="project-card" data-project="GrievancePro">
                                    <h5>GrievancePro</h5>
                                    <p>Complaint Management System</p>
                                </div>
                                <div className="project-card" data-project="CourseEnroll">
                                    <h5>CourseEnroll</h5>
                                    <p>Online Course Registration Platform</p>
                                </div>
                                <div className="project-card" data-project="TravelEase">
                                    <h5>TravelEase</h5>
                                    <p>Tourism Management System</p>
                                </div>
                                <div className="project-card" data-project="DriveMate">
                                    <h5>DriveMate</h5>
                                    <p>Car Rental Booking System</p>
                                </div>
                                <div className="project-card" data-project="LifeLine">
                                    <h5>LifeLine</h5>
                                    <p>Blood Bank & Donor Management System</p>
                                </div>
                                <div className="project-card" data-project="BookNest">
                                    <h5>BookNest</h5>
                                    <p>Online Library Management System</p>
                                </div>
                                <div className="project-card" data-project="GradeMaster">
                                    <h5>GradeMaster</h5>
                                    <p>Student Result Management System</p>
                                </div>
                                <div className="project-card" data-project="LeaveWise">
                                    <h5>LeaveWise</h5>
                                    <p>Employee Leave Management System</p>
                                </div>
                                <div className="project-card" data-project="NewsWave">
                                    <h5>NewsWave</h5>
                                    <p>Digital News Portal</p>
                                </div>
                                <div className="project-card" data-project="FormVault">
                                    <h5>FormVault</h5>
                                    <p>Contact Form with Email Integration & Data Storage</p>
                                </div>
                                <div className="project-card" data-project="StaffKeeper">
                                    <h5>StaffKeeper</h5>
                                    <p>Employee Record Management System</p>
                                </div>
                                <div className="project-card" data-project="Listify">
                                    <h5>Listify</h5>
                                    <p>Directory Management Platform</p>
                                </div>
                                <div className="project-card" data-project="GatePass">
                                    <h5>GatePass</h5>
                                    <p>Company Visitor Management System</p>
                                </div>
                                <div className="project-card" data-project="ExpenseMate">
                                    <h5>ExpenseMate</h5>
                                    <p>Daily Expense Tracking System</p>
                                </div>
                            </div>
                            <p className="project-summary">Developed 20+ full-stack applications for UG students using modern technologies like React.js, Node.js, and AI integration. Each project demonstrates expertise in user authentication, database management, responsive design, and real-world problem-solving.</p>
                        </TimelineItem>
                    </Timeline>
                </div>
                <div className="illustration">
                    <Opensource />
                </div>
            </div>
        </div>
    )
}
