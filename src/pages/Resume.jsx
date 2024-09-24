import React from 'react';
import PageWrapper from '../components/PageWrapper';
import './Resume.css'; // Assuming you'll create this file for styling

const Resume = () => {
  return (
    <PageWrapper>
      <div className="resume-container">
        {/* Left Sidebar */}
        <div className="sidebar">
          {/* Profile Picture */}
          <div className="profile-picture">
            <img src="\assets\personalPhoto.png" alt="Profile"/>
          </div>

          {/* Contact Information */}
          <section className="contact-info">
            <h2>Contact</h2>
            <p>Phone: (609) 515-7364</p>
            <p>Email: jacobmcg24@gmail.com</p>
            <p>Address: 179 Gourd Island Way, Saint Johns</p>
          </section>

          {/* Education */}
          <section className="education">
            <h2>Education</h2>
            <p>University of North Florida</p>
            <p>Bachelors of Computer Science</p>
            <p>August 2022 - Expected May 2026</p>
          </section>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Name and Title */}
          <section className="header">
            <h1>Jacob McGowan</h1>
            <h3>Game Developer and Content Creator</h3>
            <p>
              Passionate developer with extensive experience in game development,
              software engineering, and creating engaging educational content on
              YouTube.
            </p>

            {/* Button for Resume */}
            <a href="https://docs.google.com/document/d/1BQ8BAQwiPcGeK5I8yBVrhj4TLQlDoiPkcZgzXoJV8eY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="resume-button">View My Resume</button>
            </a>
          </section>

          {/* Experience */}
          <section className="experience">
            <h2>Experience</h2>
            <div>
              <h3>TheDevAtlas (2019 - Present)</h3>
              <p>
                Created educational content focused on game development, programming,
                and software engineering.
              </p>
              <p>
                Developed a range of games for various platforms, including Roblox and Unity.
              </p>
              <p>
                Produced popular YouTube videos such as "Making Portal for the Wii U."
              </p>
            </div>

            <div>
              <h3>Code Ninjas, Saint Johns — Ast. Center Director / Curriculum Manager (August 2019 - September 2024)</h3>
              <p>
              Taught students with JavaScript, Lua, and C# about the fundamentals of computer science with various projects and extra STEM activities.
              </p>
              <p>
              Responsible for managing, marketing, and presenting our educational services to potential clients.
              </p>
              <p>
              Manage the team through daily tasks as well as train them in new improvements or events
              </p>
              <p>
              Created and improved a new supplemental curriculum for events like summer camps, clubs, or workshops.
              </p>
            </div>
          </section>

          {/* References */}
          <section className="references">
            <h2>References</h2>
            <div className="reference">
              <h4>Layla Willmore</h4>
              <p>Center Director, Code Ninjas </p>
              <p> Phone: 904-295-6400 </p>
              <p> Email: layla.willmore@codeninjas.com</p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Resume;
