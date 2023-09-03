import '../styles/style.css'

function Home() {
    return (
        <div>
            <head>
                <title>Joseph Turner CS Portfolio</title>
                <meta name="description" content="Joseph Turner's CS Portfolio"/>
            </head>
            <body>
                <header>
                    <h1>
                        Joseph Turner CS Portfolio
                        <li><a href="https://www.linkedin.com/in/joseph-turner-/"><img src="images/linkedlogo.png" alt="LinkedIn" width="40px" height="40px"/></a></li>
                        <li><a href="https://github.com/sephturner"><img src="images/gitlogo.png" alt="GitHub" width="40px" height="40px"/></a></li>
                        <li><a href="mailto://jtimturner67@gmail.com"><img src="images/gmaillogo.png" alt="Email" width="40px" height="40px"/></a></li>
                    </h1>
                    <aside>
                        <nav>
                            <ol>
                                <li><strong>Resume</strong></li>
                                <li><a href="projects.html">Projects</a></li>
                            </ol>
                        </nav>
                    </aside>
                    <hr/>
                </header>
                <section>
                    <div id="education">
                        <h2>Education</h2>
                        <h3>
                            <a target="_blank" href="https://catalog.wit.edu/computing-data-science/computer-science-networking/computer-science-bs/">Wentworth Institute of Technology</a>
                            &lt;&gt;
                            <span>Brookline, MA</span>
                            &lt;&gt;
                            <span>Sept 2019 - Present</span>
                        </h3>
                        <p>
                            I am currently pursuing a Bachelor of Science degree in computer science with minors in Mathematics and Computer Networking. I have achieved dean's list in 4 semesters, and my current cumulative <strong>GPA is 3.68</strong>
                            <br/>
                            <div><strong>Relevant Coursework:</strong></div>
                            Data Structures, Computer Organization, Network Programming, Algorithms, Databases, System Administration, Multivariable Calculus, Operating Systems, Programming Languages, and Parallel & Distributed Programming
                        </p>
                        <hr/>
                    </div>
                    <div id="experience">
                        <h2>Industry Experience</h2>
                        <h3>
                            <span><a target="_blank" href="https://avesha.io">Avesha Systems Inc.</a> - DevOps Engineer</span>
                            &lt;&gt;
                            <span>Bedford, MA (Remote from Plymouth, MA)</span>
                            &lt;&gt;
                            <span>Jan 2022 - Present</span>
                        </h3>
                        <p>
                            I work in DevOps at Avesha, contributing to Avesha's automated testing framework using <a target="_blank" href="https://pkg.go.dev/github.com/onsi/ginkgo">GoLang's Ginkgo</a> and <a target="_blank" href="https://www.cypress.io">Javascript's Nodejs Cypress</a> packages. I have worked with EKS (AWS), GKE (GCP), and Kind to provision Kubernetes clusters to be used in the testing process. I have also worked with Docker to run automated tests in a containerized environment.
                            <br/>
                            <br/>
                            I spent most of my time at Avesha, as a part of the end-to-end testing team, where I helped develop tests for Avesha's <a target="_blank" href="https://avesha.io/products/kubeslice-manager/">Kubeslice Manager UI</a>. I came across many new concepts that I struggled with, like the container-in-container framework that Avesha uses to avoid memory leakage, but through open communication with coworkers and independent research, I was able to work within and contribute to the preexisting framework.
                            <br/>
                            <br/>
                            At Avesha, I have learned how to be self-directed and how to stay on top of current industry trends and standards. I have been able to learn how to manage repositories and the importance of communication within a company.
                        </p>
                        <hr/>
                    </div>
                    <div id="work">
                        <h2>Work Experience</h2>
                        <h3>
                            <span>Staples</span>
                            &lt;&gt;
                            <span>Plymouth, MA</span>
                            &lt;&gt;
                            <span>May 2019 - Aug 2020</span>
                        </h3>
                        <p>
                            At Staples, I worked as a general employee, working in the retail, sales, and tech departments. I trained new cashiers, and learned about the tech inventory to inform buyers about which products they need. I followed floor plans to organize the store according to corporate's specifications, and kept the shelves organized and presentable.
                            <br/>
                            <br/>
                            I learned how to deal with interpersonal conflict with customers, and how to communicate tech concepts to someone who may not be familiar with the topic. Staples taught me the importance of taking pride in my work regardless of whether that work will be noticed.
                        </p>
                    </div>
                </section>
                <footer>
                    <hr/>
                </footer>
            </body>
        </div>
    )
}

export default Home;