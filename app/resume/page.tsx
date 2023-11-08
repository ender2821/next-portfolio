import Image from 'next/image'
import Link from 'next/link'

import { raleway } from '../fonts'

export default function Home() {

  return (
    <main>
        <section className="container mx-auto grid grid-cols-4 gap-4 gap-x-10 print:gap-x-5 print:max-w-none m-8 px-4 lg:px-8 print:px-8 print:text-sm">
            <div className="col-span-4">
                <div className="flex gap-4">
                    <div className="block print:hidden">
                        <Image src="assets/logo.svg" width="100" height="180" alt="Josh Jensen Creative Logo" />
                    </div>
                    <div className="hidden print:block">
                        <Image src="assets/logo.svg" width="55" height="100" alt="Josh Jensen Creative Logo" />
                    </div>
                    <div>
                        <p className={`${raleway.className} text-4xl font-bold print:text-2xl`}>Joshua Jensen</p>
                        <Link href="design@joshjensencreative.com" className="block">design@joshjensencreative.com</Link>
                        <Link href="tel:2622716729" className="block">262-271-6729</Link>
                        <p>Denver, CO</p>
                    </div>
                </div>
                <h2 className={`${raleway.className} text-lg font-bold my-2 print:text-sm`}>About Me</h2>
                <p className="my-4">I am almost always doing something creative. From moonlighting brand design and UX design work,  to front end 
development, I keep myself busy after work hours. Even though design and development takes up most of my time, 
I do love to be adventurous. I spend hours up in the mountains going on long hikes with my husky or hitting up the mtn bike trails or the ski resorts. Also, a big fan of camping, motorcyle riding and hitting up a good brewery or cocktail lounge.</p>

            </div>
            <div className="col-span-4 md:col-span-1 print:col-span-1">
                <p className="font-semibold">Design Portfolio</p>
                <Link href="https://joshjensencreative.com/" className="mb-3 block break-all text-blueDark print:text-xs">https://joshjensencreative.com/</Link>
                <p className="font-semibold ">Linkedin</p>
                <Link href="https://www.linkedin.com/in/joshua-jensen-30747670/" className="mb-3 block break-all text-blueDark print:text-xs">https://www.linkedin.com/in/joshua-jensen-30747670/</Link>
                <p className="font-semibold ">Personal Recipe Project</p>
                <Link href="https://jyno-recipe.tech" className="mb-3 block break-all text-blueDark print:text-xs">https://jyno-recipe.tech</Link>
                <p className="font-semibold ">Personal List Project</p>
                <Link href="https://jyno-schit.tech" className="mb-3 block break-all text-blueDark print:text-xs">https://jyno-recipe.tech</Link>
                <p className="font-semibold ">Github</p>
                <Link href="https://github.com/ender2821" className="mb-3 block break-all text-blueDark print:text-xs">https://github.com/ender2821</Link>

                <hr className="h-px my-4 lg:my-8 bg-blue border-t-1 border-blue" ></hr>
                <h2 className="text-lg font-bold my-2 print:text-sm">Skills</h2>
                <ul className="list-disc list-inside marker:text-blue ">
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
            <div className="col-span-4 md:col-span-3 print:col-span-3 ">
            <div className="my-2">
                    <h2 className={`${raleway.className} inline-block text-lg font-bold print:text-sm`}>Portland Webworks - Fullstack Developer Contractor</h2>
                    <span className="inline-block italic mx-2">Apr 2023 - Sep 2023</span>
                </div>
                <ul className="list-disc list-inside marker:text-blue">
                    <li>Build front end components in Next.js </li>
                    <li>Built mapped data structures that implement into redux state</li>
                    <li>Worked with API integration through Spring CM Java backend</li>
                    <li>Styled complex forms with Tailwind css framework</li>
                </ul>
                <hr className="h-px my-4 lg:my-8 bg-blue border-t-1 border-blue print:border-0" ></hr>
                <div className="my-2">
                    <h2 className={`${raleway.className} inline-block text-lg font-bold print:text-sm`}>Rightpoint - Senior Developer</h2>
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
                <hr className="h-px my-4 lg:my-8 bg-blue border-t-1 border-blue print:border-0" ></hr>
                <div className="my-2">
                    <h2 className={`${raleway.className} inline-block text-lg font-bold print:text-sm`}>Avant - UI Developer</h2>
                    <span className="inline-block italic mx-2">May 2018 - Aug 2018</span>
                </div>
                <ul className="list-disc list-inside marker:text-blue">
                    <li>Write HTML and CSS for templates inside of React</li>
                    <li>Did cross browser and WCAG accessability testing</li>
                    <li>Experimented with converting styles into React Styled Components</li>
                    <li>Helped write mock data utilizing graphQL and typescript based schema.</li>
                </ul>
                <hr className="h-px my-4 lg:my-8 bg-blue border-t-1 border-blue print:border-0" ></hr>
                <div className="my-2">
                    <h2 className={`${raleway.className} inline-block text-lg font-bold print:text-sm`}>Riskbone - Product Developer</h2>
                    <span className="inline-block italic mx-2">May 2015 - Oct 2017</span>
                </div>
                <ul className="list-disc list-inside marker:text-blue">
                    <li>Concept, design, develop company website</li>
                    <li>Concept, design, and code web app for Chicago Board of Trade</li>
                    <li>Concept, design, and code the flagship web app Level Trading Field</li>
                    <li>Manage small team of front end programmers</li>
                    <li>Performed sales pitches and product demos</li>
                </ul>
                <hr className="h-px my-4 lg:my-8 bg-blue border-t-1 border-blue print:border-0" ></hr>
                <div className="my-2">
                    <h2 className={`${raleway.className} inline-block text-lg font-bold print:text-sm`}>Inet - Web Design & Developer</h2>
                    <span className="inline-block italic mx-2">March 2014 - April 2015</span>
                </div>
                <ul className="list-disc list-inside marker:text-blue">
                    <li>Design a website from concept to presentable prototype in 12 hours</li>
                    <li>Print and social media design for multiple marketing campaigns</li>
                    <li>Logo design for various web projects</li>
                    <li>Illustration to implement into website designs </li>
                    <li>Web coding for adding key elements for customer approval</li>
                </ul>
                <hr className="h-px my-4 lg:my-8 bg-blue border-t-1 border-blue print:border-0" ></hr>
                <div className="my-2">
                    <h2 className={`${raleway.className} inline-block text-lg font-bold print:text-sm`}>Radyne - Creative Visual Designer</h2>
                    <span className="inline-block italic mx-2">May 2012 - March 2014</span>
                </div>
                <ul className="list-disc list-inside marker:text-blue">
                    <li>Concept, design, develop company websites and stand alone sites</li>
                    <li>Research, concept, design HMI and other user interfaces</li>
                    <li>Design print ready advertising materials</li>
                    <li>Preform all product photography for web and print</li>
                    <li>Technical illustration for office artwork and machine graphics</li>
                </ul>
                <hr className="h-px my-4 lg:my-8 bg-blue border-t-1 border-blue print:border-0" ></hr>
                <div className="my-2">
                    <h2 className={`${raleway.className} text-lg font-bold print:text-sm`}>Freelance</h2>
                </div>
                <ul className="list-disc list-inside marker:text-blue">
                    <li>Magnetar Capital - redesign trading competition application for web / Front end development</li>
                    <li>Kinktastic LLC - brand and experience direction / Front end development</li>
                    <li>Gearblast LLC - brand and website redesign and development</li>
                    <li>Ryder Gear - logo and brand design</li>
                    <li>14 Werewolves - logo and brand design</li>
                    <li>Riffhard - website development</li>
                </ul>
                <hr className="h-px my-4 lg:my-8 bg-blue border-t-1 border-blue print:border-0" ></hr>
                <div className="my-2">
                    <h2 className={`${raleway.className} inline-block text-lg font-bold print:text-sm`}>Education - BFA in design and illustration</h2>
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
