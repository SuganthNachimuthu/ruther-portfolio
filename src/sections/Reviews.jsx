import reactImg from "../assets/react.png";
import nodeImg from "../assets/node.jpeg";
import javascriptImg from "../assets/javascript.jpeg";
import sqlImg from "../assets/sql.jpeg";
import htmlcssImg from "../assets/html,css.jpeg";
import flexboxbootstrapImg from "../assets/flexbox,boostrap.jpeg";
import pythonImg from "../assets/python.jpeg";
import flexboxImg from "../assets/flexbox.jpeg";
import gitImg from "../assets/git.jpeg";
import javaImg from "../assets/java in web.jpeg";

const certifications = [
    { course: "React.js", issuer: "NXT Wave Member of NASSCOM [Designed by Top alumni from\nStandford University, Google, IIT Bombay, IIT Delhi, Amazon, Microsoft etc.]"
, image: reactImg },
    { course: "Node.js", issuer: "NXT Wave Member of NASSCOM [Designed by Top alumni from\nStandford University, Google, IIT Bombay, IIT Delhi, Amazon, Microsoft etc.]"
, image: nodeImg },
    { course: "JavaScript", issuer: "NXT Wave Member of NASSCOM [Designed by Top alumni from\nStandford University, Google, IIT Bombay, IIT Delhi, Amazon, Microsoft etc.]"
, image: javascriptImg },
    { course: "Sqlite", issuer: "NXT Wave Member of NASSCOM [Designed by Top alumni from\nStandford University, Google, IIT Bombay, IIT Delhi, Amazon, Microsoft etc.]"
, image: sqlImg },
    { course: "HTML, CSS with Bootstrap", issuer: "NXT Wave Member of NASSCOM [Designed by Top alumni from\nStandford University, Google, IIT Bombay, IIT Delhi, Amazon, Microsoft etc.]"
, image: htmlcssImg },
    { course: "Flexbox, Boostrap", issuer: "NXT Wave Member of NASSCOM [Designed by Top alumni from\nStandford University, Google, IIT Bombay, IIT Delhi, Amazon, Microsoft etc.]"
, image: flexboxbootstrapImg},
    { course: "Python", issuer: "NXT Wave Member of NASSCOM [Designed by Top alumni from\nStandford University, Google, IIT Bombay, IIT Delhi, Amazon, Microsoft etc.]"
, image: pythonImg },
    { course: "Flexbox", issuer: "NXT Wave Member of NASSCOM [Designed by Top alumni from\nStandford University, Google, IIT Bombay, IIT Delhi, Amazon, Microsoft etc.]"
, image: flexboxImg },
    { course: "Git", issuer: "NXT Wave Member of NASSCOM [Designed by Top alumni from\nStandford University, Google, IIT Bombay, IIT Delhi, Amazon, Microsoft etc.]"
, image: gitImg },
    { course: "JavaScript Foundation", issuer: "NXT Wave Member of NASSCOM [Designed by Top alumni from\nStandford University, Google, IIT Bombay, IIT Delhi, Amazon, Microsoft etc.]"
, image: javaImg }
];

export default function Certifications() {
    return (
        <div id="certification" className="section cert-section" style={{
            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.06) 0%, rgba(253, 224, 71, 0.06) 100%)'
        }}>
            <h2>Certifications</h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "1.5rem",
                    justifyContent: "center",
                    padding: "1rem"
                }}
            >
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        style={{
                            background: "white",
                            padding: "1rem 1.5rem",
                            borderRadius: "10px",
                            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
                            textAlign: "center"
                        }}
                    >
                        <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                            {cert.course}
                        </h3>
                        <img
                            src={cert.image}
                            alt={cert.course}
                            style={{
                                width: "100%",
                                height: "auto", // full size
                                borderRadius: "8px",
                                objectFit: "contain",
                                marginBottom: "0.5rem"
                            }}
                        />
                        <p style={{ fontSize: "0.9rem", color: "gray" }}>{cert.issuer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
