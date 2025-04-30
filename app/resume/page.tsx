import Image from "next/image";
import Link from "next/link";

import { raleway } from "../fonts";

export default function Home() {
  return (
    <main className="bg-white text-black-bg print:bg-white print:text-black">
      <section className="container mx-auto grid grid-cols-4 gap-4 gap-x-10 print:gap-x-5 print:max-w-none p-8 px-4 lg:px-8 print:px-8 print:text-sm">
        <div className="col-span-4">
          <div className="flex gap-4">
            <div className="block print:hidden">
              <Image
                src="joshJensenCreativeLogo.svg"
                width="120"
                height="180"
                alt="Josh Jensen Creative Logo"
              />
            </div>
            <div className="hidden print:block">
              <Image
                src="joshJensenCreativeLogo.svg"
                width="55"
                height="100"
                alt="Josh Jensen Creative Logo"
              />
            </div>
            <div>
              <h1
                className={`${raleway.className} text-4xl font-bold print:text-2xl`}
              >
                Joshua Jensen
              </h1>
              <Link href="design@joshjensencreative.com" className="block">
                design@joshjensencreative.com
              </Link>
              <Link href="tel:2622716729" className="block">
                262-271-6729
              </Link>
              <p>Denver, CO</p>
            </div>
          </div>
          <h2
            className={`${raleway.className} mb-0 text-lg font-bold my-2 print:text-sm before:hidden after:hidden`}
          >
            About Me
          </h2>
          <p className="mb-4 mt-0">
            A seasoned Fullstack Developer and UX Designer with a wealth of
            expertise spanning 13 years, I specialize in crafting exceptional
            digital experiences. With a strong emphasis on React.js and a keen
            focus on the cutting-edge Next.js framework, I bring a dynamic skill
            set to create innovative and user-centric solutions. Beyond my
            professional pursuits, I thrive on outdoor adventures, including
            snowboarding, hiking, and exploring off-road terrain with 4x4s and
            mountain bikes, all while enjoying the company of my spirited husky,
            Glacier.
          </p>
        </div>
        <div className="col-span-4 md:col-span-1 print:col-span-1">
          <p className="font-semibold mb-0">Website</p>
          <Link
            href="https://joshjensencreative.com/"
            className="mb-3 block break-all text-blueDark print:text-xs"
          >
            https://joshjensencreative.com/
          </Link>
          <p className="font-semibold mb-0">Linkedin</p>
          <Link
            href="https://www.linkedin.com/in/joshua-jensen-30747670/"
            className="mb-3 block break-all text-blueDark print:text-xs"
          >
            https://www.linkedin.com/in/joshua-jensen-30747670/
          </Link>
          <p className="font-semibold mb-0">Github</p>
          <Link
            href="https://github.com/ender2821"
            className="mb-3 block break-all text-blueDark print:text-xs"
          >
            https://github.com/ender2821
          </Link>

          <hr className="h-px my-4 bg-blue border-t-1 border-blue"></hr>
          <h2
            className={`${raleway.className} mb-0 text-lg font-bold my-2 print:text-sm before:hidden after:hidden`}
          >
            Skills
          </h2>
          <ul className="list-disc list-inside marker:text-blue ">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>Javascript</li>
            <li>Html</li>
            <li>Css</li>
            <li>Sass/Scss</li>
            <li>Tailwind</li>
            <li>Redux</li>
            <li>Apollo Client</li>
            <li>Contentful</li>
            <li>Sanity.io</li>
            <li>GraphQL</li>
            <li>.Net Core</li>
            <li>Sharepoint</li>
            <li>Node.js</li>
            <li>AWS / Vercel</li>
            <li>Azure</li>
            <li>CI/CD with yaml</li>
            <li>Git</li>
            <li>MySql</li>
            <li>UX Design</li>
            <li>Graphic Design</li>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-3 print:col-span-3 ">
          <div className="my-2">
            <h2
              className={`${raleway.className} mb-0 inline-block text-lg font-bold print:text-sm before:hidden after:hidden`}
            >
              Frontier Airlines - Lead Developer
            </h2>
            <span className="inline-block italic mx-2">Sep 2024 - Present</span>
          </div>
          <ul className="list-disc list-inside marker:text-blue">
            <li>Lead a team of developers based in India and onshore</li>
          </ul>
          <hr className="h-px my-4 bg-blue border-t-1 border-blue print:border-0"></hr>
          <div className="my-2">
            <h2
              className={`${raleway.className} mb-0 inline-block text-lg font-bold print:text-sm before:hidden after:hidden`}
            >
              GAVS Technologies - Lead Engineer
            </h2>
            <span className="inline-block italic mx-2">
              Jan 2024 - Aug 2024
            </span>
          </div>
          <ul className="list-disc list-inside marker:text-blue">
            <li>
              Worked as the Lead Web Engineer for <b>Frontier Airlines</b>
            </li>
            <li>Lead a team of developers based in India and onshore</li>
            <li>
              Directed knowledge transfer process that included documentation,
              architecture diagrams, and video presentations
            </li>
            <li>
              Built and presented POCs for senior directors from{" "}
              <b>content management systems</b> to <b>cacheing services</b>
            </li>
            <li>
              Integrated <b>Sanity CMS</b> into a <b>Next.js</b> frontend using{" "}
              <b>Typescript</b> and <b>React-query</b>.
            </li>
          </ul>
          <hr className="h-px my-4 bg-blue border-t-1 border-blue print:border-0"></hr>
          <div className="my-2">
            <h2
              className={`${raleway.className} mb-0 inline-block text-lg font-bold print:text-sm before:hidden after:hidden`}
            >
              Portland Webworks - Fullstack Developer Contractor
            </h2>
            <span className="inline-block italic mx-2">
              Apr 2023 - Sep 2023
            </span>
          </div>
          <ul className="list-disc list-inside marker:text-blue">
            <li>
              Developed front-end components using <b>Next.js</b>
            </li>
            <li>
              Constructed mapped data structures integrated into <b>Redux</b>
            </li>
            <li>
              Collaborated on API integration through the <b>Java</b> backend
            </li>
            <li>
              Styled complex forms utilizing the <b>Tailwind</b> CSS framework
            </li>
          </ul>
          <hr className="h-px my-4 bg-blue border-t-1 border-blue print:border-0"></hr>
          <div className="my-2">
            <h2
              className={`${raleway.className} mb-0 inline-block text-lg font-bold print:text-sm before:hidden after:hidden`}
            >
              Rightpoint - Senior Developer
            </h2>
            <span className="inline-block italic mx-2">
              Sep 2018 - Mar 2023
            </span>
          </div>
          <ul className="list-disc list-inside marker:text-blue">
            <li>
              Practiced frontend development in{" "}
              <b>HTML, CSS, Sass, JS, and Typescript</b>
            </li>
            <li>Architected frontends and adhered to UX design standards</li>
            <li>
              Used{" "}
              <b>React, Next, Node, Sharepoint, Episerver, Git, and Azure</b>
            </li>
            <li>Led teams and enhanced development practices</li>
            <li>
              Delivered multiple tech talks, focusing on web application
              development
            </li>
            <li>
              Mentored other developers in <b>UI Development</b> and component
              library construction with Storybook
            </li>
          </ul>
          <hr className="h-px my-4 bg-blue border-t-1 border-blue print:border-0"></hr>
          <div className="my-2">
            <h2
              className={`${raleway.className} mb-0 inline-block text-lg font-bold print:text-sm before:hidden after:hidden`}
            >
              Avant - UI Developer
            </h2>
            <span className="inline-block italic mx-2">
              May 2018 - Aug 2018
            </span>
          </div>
          <ul className="list-disc list-inside marker:text-blue">
            <li>
              Wrote HTML and CSS for templates within <b>React</b>
            </li>
            <li>
              Conducted cross-browser and <b>WCAG</b> accessibility testing
            </li>
            <li>
              Experimented with converting styles into React Styled Components
            </li>
            <li>
              Wrote mock data utilizing <b>GraphQL</b> and TypeScript-based
              schemas
            </li>
          </ul>
          <hr className="h-px my-4 bg-blue border-t-1 border-blue print:border-0"></hr>
          <div className="my-2">
            <h2
              className={`${raleway.className} mb-0 inline-block text-lg font-bold print:text-sm before:hidden after:hidden`}
            >
              Riskbone - Product Developer
            </h2>
            <span className="inline-block italic mx-2">
              May 2015 - Oct 2017
            </span>
          </div>
          <ul className="list-disc list-inside marker:text-blue">
            <li>
              Conceptualized, designed, and developed the Riskbone custopmer
              facing website
            </li>
            <li>Created a trading web app for the Chicago Board of Trade</li>
            <li>
              Conceptualized, designed, and coded the flagship web app, Level
              Trading Field
            </li>
            <li>Managed a team of front-end programmers</li>
            <li>Conducted sales pitches and product demos</li>
          </ul>
          <hr className="h-px my-4 bg-blue border-t-1 border-blue print:border-0"></hr>
          <div className="my-2">
            <h2
              className={`${raleway.className} mb-0 inline-block text-lg font-bold print:text-sm before:hidden after:hidden`}
            >
              Inet - Web Design & Developer
            </h2>
            <span className="inline-block italic mx-2">
              March 2014 - April 2015
            </span>
          </div>
          <ul className="list-disc list-inside marker:text-blue">
            <li>Designed websites from concept to presentable prototype</li>
            <li>
              Created print and social media designs for multiple marketing
              campaigns
            </li>
            <li>Designed logos for web and print projects</li>
            <li>Developed illustrations implemented into website designs</li>
            <li>
              Executed web coding for adding key elements for customer approval
            </li>
          </ul>
          <hr className="h-px my-4 bg-blue border-t-1 border-blue print:border-0"></hr>
          <div className="my-2">
            <h2
              className={`${raleway.className} mb-0 inline-block text-lg font-bold print:text-sm before:hidden after:hidden`}
            >
              Radyne - Creative Visual Designer
            </h2>
            <span className="inline-block italic mx-2">
              May 2012 - March 2014
            </span>
          </div>
          <ul className="list-disc list-inside marker:text-blue">
            <li>Conceptualized, designed, and developed company websites</li>
            <li>
              Researched, conceptualized, and designed HMI and other user
              interfaces
            </li>
            <li>Created print-ready advertising materials</li>
            <li>Conducted all product photography for web and print</li>
            <li>
              Executed technical illustration for office artwork and machine
              graphics
            </li>
          </ul>
          <hr className="h-px my-4 bg-blue border-t-1 border-blue print:border-0"></hr>
          <div className="my-2">
            <h2
              className={`${raleway.className} mb-0 text-lg font-bold print:text-sm before:hidden after:hidden`}
            >
              Freelance
            </h2>
          </div>
          <ul className="list-disc list-inside marker:text-blue">
            <li>Redesigned a trading application for Magnetar Capital</li>
            <li>Provided brand and Front-end development for Kinktastic LLC</li>
            <li>
              Redesigned and developed the brand and website for Gearblast LLC
            </li>
            <li>
              Designed the logo and brand for Ryder Gear and 14 Werewolves
            </li>
            <li>Had a hand in web development for Riffhard</li>
          </ul>
          <hr className="h-px my-4 bg-blue border-t-1 border-blue print:border-0"></hr>
          <div className="my-2">
            <h2
              className={`${raleway.className} mb-0 inline-block text-lg font-bold print:text-sm before:hidden after:hidden`}
            >
              Education - BFA in design and illustration
            </h2>
            <span className="inline-block italic mx-2">
              Aug. 2009 - May 2013
            </span>
          </div>
          <ul className="list-disc list-inside marker:text-blue">
            <li>
              Attended Milwaukee Institute of Art and Design for four years
            </li>
            <li>
              Honors program participant and recipient of a half-ride
              scholarship
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
