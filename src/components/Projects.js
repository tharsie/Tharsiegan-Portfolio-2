import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png"; // Replace with your actual image path
import projImg2 from "../assets/img/project-img2.png"; // Replace with your actual image path
import projImg3 from "../assets/img/project-img3.png"; // Replace with your actual image path
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Transport Management System",
      description: "A MERN stack subsystem of a Hotel Management System.",
      imgUrl: projImg3, // Replace with an actual image of the project
    },
    {
      title: "Blood Donation System",
      description: "A web-based platform for managing blood donations using HTML, CSS, JavaScript, PHP, and MySQL.",
      imgUrl: projImg1, // Replace with an actual image of the project
    },
    {
      title: "Online Customer Care System",
      description: "A web application for improving customer support built with HTML, CSS, JavaScript, and Java.",
      imgUrl: projImg2, // Replace with an actual image of the project
    },
    {
      title: "TODO Mobile App",
      description: "A task management app developed using Android Studio, Kotlin, and SQLite.",
      imgUrl: projImg1, // Replace with an actual image of the project
    },
    {
      title: "Car Racing Mobile Game",
      description: "An exciting racing game developed with Android Studio and Kotlin.",
      imgUrl: projImg2, // Replace with an actual image of the project
    },
    {
      title: "Online Food Delivery App UI",
      description: "A mobile app UI designed in Figma.",
      imgUrl: projImg3, // Replace with an actual image of the project
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of my featured projects, showcasing my skills and experience in software development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mobile Apps</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.slice(0, 3).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.slice(3).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
