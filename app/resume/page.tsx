import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
        <h1>Resume</h1>
        <section className="container mx-auto grid grid-cols-4 gap-4 gap-x-10">
            <div className="col-span-4">
                <div className="">
                    <img src="" alt="" />
                </div>
                <p className="text-4xl font-bold">Joshua Jensen</p>
                <Link href="design@joshjensencreative.com">design@joshjensencreative.com</Link>
                <Link href="tel:2622716729">262-271-6729</Link>
                <p>Denver, CO</p>
                <h2 className="text-lg font-bold my-2">About Me</h2>
                <p className="my-4">I am almost always doing something creative. From moonlighting brand design and UX design work,  to front end 
development, I keep myself busy after work hours. Even though design and development takes up most of my time, 
I do love to be adventurous. I spend hours up in the mountains going on long hikes with my husky or hitting up the mtn bike trails or the ski resorts. Also, a big fan of camping, motorcyle riding and hitting up a good brewery or cocktail lounge.</p>

            </div>
            <div className="col-span-1">
                <p className="font-semibold">Design Portfolio</p>
                <Link href="https://joshjensencreative.com/" className="mb-3 block">https://joshjensencreative.com/</Link>
                <p className="font-semibold">Personal Recipe Project</p>
                <Link href="https://jyno-recipe.tech" className="mb-3 block">https://jyno-recipe.tech</Link>
                <p className="font-semibold">Personal List Project</p>
                <Link href="https://jyno-schit.tech" className="mb-3 block">https://jyno-recipe.tech</Link>
                <p className="font-semibold">Github</p>
                <Link href="https://github.com/ender2821" className="mb-3 block">https://github.com/ender2821</Link>
                <p className="font-semibold">Linkedin</p>
                <Link href="https://www.linkedin.com/in/joshua-jensen-30747670/" className="mb-3 block">https://www.linkedin.com/in/joshua-jensen-30747670/</Link>
                <hr className="h-px my-8 bg-blue border-0 dark:bg-gray-700"></hr>
                <h2 className="text-lg font-bold my-2">Skills</h2>
                <ul className="list-disc list-inside marker:text-blue">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Typescript</li>
                    <li>Javascript</li>
                    <li>Html</li>
                    <li>Css</li>
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
                    <li>UX Design</li>
                    <li>Graphic Design</li>
                </ul>
            </div>
            <div className="col-span-3">
                <div className="my-2">
                    <h2 className="inline-block text-lg font-bold">Rightpoint - Senior Developer</h2>
                    <span className="inline-block italic mx-2">Sep 2018 - May 2023</span>
                </div>
                <ul className="list-disc list-inside marker:text-blue">
                    <li>Frontend dev practice in HTML, CSS, Sass, JS, Typescript</li>
                    <li>Architect frontends and adhere to UX design standards</li>
                    <li>5 years of experience in React and Next.js. With knowledge in Node, Sharepoint, Episerver, Git, and Azure</li>
                    <li>Lead teams and improve development practices</li>
                    <li>Give multiple tech talks focusing on presentation layer of web application development.</li>
                    <li>Mentor other developers in UI Development and component library construction with Storybook</li>
                </ul>
                <hr className="h-px my-8 bg-blue border-0 dark:bg-gray-700"></hr>
                <div className="my-2">
                    <h2 className="inline-block text-lg font-bold">Avant - UI Developer</h2>
                    <span className="inline-block italic mx-2">May 2018 - Aug 2018</span>
                </div>
                <ul className="list-disc list-inside marker:text-blue">
                    <li>Write HTML and CSS for templates inside of React</li>
                    <li>Did cross browser and WCAG accessability testing</li>
                    <li>Experimented with converting styles into React Styled Components</li>
                    <li>Helped write mock data utilizing graphQL and typescript based schema.</li>
                </ul>
                <hr className="h-px my-8 bg-blue border-0 dark:bg-gray-700"></hr>
                <div className="my-2">
                    <h2 className="inline-block text-lg font-bold">Riskbone - Product Developer</h2>
                    <span className="inline-block italic mx-2">May 2015 - Oct 2017</span>
                </div>
                <ul className="list-disc list-inside marker:text-blue">
                    <li>Concept, design, develop company website</li>
                    <li>Concept, design, and code web app for Chicago Board of Trade</li>
                    <li>Concept, design, and code the flagship web app Level Trading Field</li>
                    <li>Manage small team of front end programmers</li>
                    <li>Performed sales pitches and product demos</li>
                </ul>
                <hr className="h-px my-8 bg-blue border-0 dark:bg-gray-700"></hr>
                <div className="my-2">
                    <h2 className="inline-block text-lg font-bold">Inet - Web Design & Developer</h2>
                    <span className="inline-block italic mx-2">March 2014 - April 2015</span>
                </div>
                <ul className="list-disc list-inside marker:text-blue">
                    <li>Design a website from concept to presentable prototype in 12 hours</li>
                    <li>Print and social media design for multiple marketing campaigns</li>
                    <li>Logo design for various web projects</li>
                    <li>Illustration to implement into website designs </li>
                    <li>Web coding for adding key elements for customer approval</li>
                </ul>
                <hr className="h-px my-8 bg-blue border-0 dark:bg-gray-700"></hr>
                <div className="my-2">
                    <h2 className="inline-block text-lg font-bold">Radyne - Creative Visual Designer</h2>
                    <span className="inline-block italic mx-2">May 2012 - March 2014</span>
                </div>
                <ul className="list-disc list-inside marker:text-blue">
                    <li>Concept, design, develop company websites and stand alone sites</li>
                    <li>Research, concept, design HMI and other user interfaces</li>
                    <li>Design print ready advertising materials</li>
                    <li>Preform all product photography for web and print</li>
                    <li>Technical illustration for office artwork and machine graphics</li>
                </ul>
                <hr className="h-px my-8 bg-blue border-0 dark:bg-gray-700"></hr>
                <div className="my-2">
                    <h2 className="text-lg font-bold">Freelance</h2>
                </div>
                <ul className="list-disc list-inside marker:text-blue">
                    <li>Magnetar Capital - redesign trading competition application for web / Front end development</li>
                    <li>Kinktastic LLC - brand and experience direction / Front end development</li>
                    <li>Gearblast LLC - brand and website redisgn and development</li>
                    <li>Ryder Gear - logo and brand design</li>
                    <li>14 Werewolves - logo and brand design</li>
                    <li>Riffhard - website development</li>
                </ul>
                <hr className="h-px my-8 bg-blue border-0 dark:bg-gray-700"></hr>
                <div className="my-2">
                    <h2 className="inline-block text-lg font-bold">Education - BFA in design and illustration</h2>
                    <span className="inline-block italic mx-2">Aug. 2009 - May 2013</span>
                </div>
                <ul className="list-disc list-inside marker:text-blue">
                    <li>Attended Milwaukee Institute of Art and Design for 4 years</li>
                    <li>Was in honors program, and retained half ride scholarship</li>
                </ul>
            </div>
        </section>
    </main>
  )
}
