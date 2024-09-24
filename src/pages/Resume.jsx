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

          {/* Expertise */}
          <section className="expertise">
            <h2>Expertise</h2>
            <ul>
              <li>Programming</li>
              <li>Game Development</li>
              <li>Content Creation</li>
              <li>Web Development</li>
            </ul>
          </section>

          {/* Language */}
          <section className="language">
            <h2>Language</h2>
            <p>English</p>
            <p>Spanish</p>
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
          </section>

          {/* Experience */}
          <section className="experience">
            <h2>Experience</h2>
            <div>
              <h3>Founder & Creator - TheDevAtlas (2019 - Present)</h3>
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
              <h3>Game Developer - Freelance Projects (2016 - Present)</h3>
              <p>
                Participated in multiple game jams, developing games like "Cook to Kill."
              </p>
              <p>
                Created modern tycoon and war games inspired by popular titles.
              </p>
              <p>
                Worked on preserving video game models, including Skylanders.
              </p>
            </div>
          </section>

          {/* References */}
          <section className="references">
            <h2>References</h2>
            <div className="reference">
              <h4>Name Surname</h4>
              <p>Job position, Company Name</p>
              <p>Phone: 123-456-7890</p>
              <p>Email: hello@reallygreatsite.com</p>
            </div>
            <div className="reference">
              <h4>Name Surname</h4>
              <p>Job position, Company Name</p>
              <p>Phone: 123-456-7890</p>
              <p>Email: hello@reallygreatsite.com</p>
            </div>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Resume;
