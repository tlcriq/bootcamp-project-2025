export default function Resume() {
    return (
    <main>
            <h1 className = "page-title">
                Resume
            </h1>

            <a href="resume.pdf" download> Download resume </a>

            <div className="resume">
                <section className="section">
                    <h2 className="section-title">Education</h2>
                    <div className="entry">
                        <h3 className="entry-title">Bachelor of Science Computer Science</h3>
                        <p className="entry-info">California Polytechnic Institute, San Luis Obispo | Expected graduation May 2029</p>
                    </div>
                </section>
                
                <section className="section">
                    <h2 className="section-title">Experience</h2>
                    <div className="entry">
                        <h3 className="entry-title">Teacher - League of Amazing Programmers</h3>
                        
                        <p className="entry-info">League of Amazing Programmers | Teaching Assistant Feb 2023 - June 2025, Teacher June - August 2025</p>
                        
                        <p className="entry-description">Teaching classes and summer camps about Java and Python programming, as well as proper Github practices</p>
                    </div>
                </section>

                <section className="section">
                    <h2 className="section-title">Coursework</h2>

                    <ul className="course-list">
                        <li>Summer 2023 - <strong>Programming with Python</strong> at MiraCosta College</li>
                        <li>Fall 2023 - <strong>AP Computer Science A</strong> at Canyon Crest Academy</li>
                        <li>Summer 2024 - <strong>Computer Vision and AI Tools</strong> at Carleton College</li>
                        <li>Fall 2025 - <strong>Data Structures</strong> at Cal Poly</li>
                    </ul>

                </section>

                <section className="section">
                    <h2 className="section-title">Skills</h2>

                    <ul className="skill-list">
                        <li><strong>Languages: python, Java, HTML, CSS, CSV</strong></li>
                    </ul>
                </section>

                <section className="section">
                    <h2 className="section-title">Projects</h2>
                    <div className="entry">
                        <h3 className="entry-title">Personal Website (this one)</h3>

                        <p className="entry-info">
                            Designed and built a personal website with HTML and CSS
                        </p>

                        <h3 className="entry-title">Computer Vision Security System</h3>

                        <p className="entry-info">
                            Worked with a team to create a computer-vision-based home security system
                        </p>

                        <p className="entry-description">
                            
                        </p>
                    </div>
                </section>
                
            </div>

        </main>
    );
}