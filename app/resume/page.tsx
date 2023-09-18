import Image from 'next/image'

export default function Home() {
  return (
    <main>
        <h1>Resume</h1>
        <section className="container mx-auto grid grid-cols-4 gap-4">
            <div className="col-span-4">
                <div className="">
                    <img src="" alt="" />
                </div>
                <address>
                    <p>Joshua Jensen</p>
                    <a href="design@joshjensencreative.com">design@joshjensencreative.com</a>
                    <a href="tel:2622716729">262-271-6729</a>
                    <p>Denver, CO</p>
                </address>
                <div className="">
                    <h2>About Me</h2>
                </div>
                <p>I am almost always doing something creative. From moonlighting brand design and UX design work,  to front end 
development, I keep myself busy after work hours. Even though design and development takes up most of my time, 
I do love to be adventurous. I built my own shop to repair motorcycles for multiple customers, and I get out to the 
race track when I can. I am a big fan of Ducatis. Hitting up bars and socializing and networking is always a good 
time. To relax, I prefer a self made cocktail or a good glass of whiskey.</p>
            </div>
            <div className="col-span-1">
                <h2>Work Examples and Media</h2>
                <p>Resume Site</p>
                <a href="https://jyno.tech">https://jyno.tech</a>
                <p>Design Portfolio</p>
                <a href="http://joshjensencreative.com/">http://joshjensencreative.com/</a>
                <p>Personal Recipe Project</p>
                <a href="https://jyno-recipe.tech">https://jyno-recipe.tech</a>
                <p>Personal List Project</p>
                <a href="https://jyno-schit.tech">https://jyno-recipe.tech</a>
                <p>Github</p>
                <a href="https://github.com/ender2821">https://github.com/ender2821</a>
                <p>Linkedin</p>
                <a href="https://www.linkedin.com/in/joshua-jensen-30747670/">https://www.linkedin.com/in/joshua-jensen-30747670/</a>

                <h2>Skills</h2>
                <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Javascript</li>
                    <li>UX Design</li>
                    <li>Graphic Design</li>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Typescript</li>
                    <li>Sass/Scss</li>
                    <li>Tailwind</li>
                    <li>Contentful / Sanity.io</li>
                    <li>GraphQL</li>
                    <li>Sharepoint</li>
                    <li>Node.js</li>
                    <li>AWS / Vercel</li>
                    <li>Azure</li>
                    <li>Git</li>
                    <li>MySql</li>
                </ul>
            </div>
            <div className="col-span-3">
                <div className="">
                    <h2>Rightpoint - Senior Developer</h2>
                    <span>Sep 2018 - May 2023</span>
                </div>
                <ul>
                    <li>Frontend dev practice in HTML, CSS, Sass, JS, Typescript</li>
                    <li>Architect frontends and adhere to UX design standards</li>
                    <li>5 years of experience in React and Next.js. With knowledge in Node, Sharepoint, Episerver, Git, and Azure</li>
                    <li>Lead teams and improve development practices</li>
                    <li>Give multiple tech talks focusing on presentation layer of web application development.</li>
                    <li>Mentor other developers in UI Development and component library construction with Storybook</li>
                </ul>
                <div className="">
                    <h2>Avant - UI Developer</h2>
                    <span>May 2018 - Aug 2018</span>
                </div>
                <ul>
                    <li>Write HTML and CSS for templates inside of React</li>
                    <li>Did cross browser and WCAG accessability testing</li>
                    <li>Experimented with converting styles into React Styled Components</li>
                    <li>Helped write mock data utilizing graphQL and typescript based schema.</li>
                </ul>
                <div className="">
                    <h2>Riskbone - Product Developer</h2>
                    <span>May 2015 - Oct 2017</span>
                </div>
                <ul>
                    <li>Concept, design, develop company website</li>
                    <li>Concept, design, and code web app for Chicago Board of Trade</li>
                    <li>Concept, design, and code the flagship web app Level Trading Field</li>
                    <li>Manage small team of front end programmers</li>
                    <li>Performed sales pitches and product demos</li>
                </ul>
                <div className="">
                    <h2>Inet - Web Design & Developer</h2>
                    <span>March 2014 - April 2015</span>
                </div>
                <ul>
                    <li>Design a website from concept to presentable prototype in 12 hours</li>
                    <li>Print and social media design for multiple marketing campaigns</li>
                    <li>Logo design for various web projects</li>
                    <li>Illustration to implement into website designs </li>
                    <li>Web coding for adding key elements for customer approval</li>
                </ul>
                <div className="">
                    <h2>Radyne - Creative Visual Designer</h2>
                    <span>May 2012 - March 2014</span>
                </div>
                <ul>
                    <li>Concept, design, develop company websites and stand alone sites</li>
                    <li>Research, concept, design HMI and other user interfaces</li>
                    <li>Design print ready advertising materials</li>
                    <li>Preform all product photography for web and print</li>
                    <li>Technical illustration for office artwork and machine graphics</li>
                </ul>
                <div className="">
                    <h2>Freelance</h2>
                </div>
                <ul>
                    <li>Magnetar Capital - redesign trading competition application for web / Front end development</li>
                    <li>Kinktastic LLC - brand and experience direction / Front end development</li>
                    <li>Gearblast LLC - brand and website redisgn and development</li>
                    <li>Ryder Gear - logo and brand design</li>
                    <li>14 Werewolves - logo and brand design</li>
                    <li>Riffhard - website development</li>
                </ul>
                <div className="">
                    <h2>Education - BFA in design and illustration</h2>
                    <span>Aug. 2009 - May 2013</span>
                </div>
                <ul>
                    <li>Attended Milwaukee Institute of Art and Design for 4 years</li>
                    <li>Was in honors program, and retained half ride scholarship</li>
                </ul>
            </div>
        </section>
    </main>
  )
}
