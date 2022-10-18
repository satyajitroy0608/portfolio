import React from 'react';
import CP1 from '../assets/Veritas.jpg';
import CP2 from '../assets/AlgoAnalytics.png';
import CP3 from '../assets/Google.jpg';
import CP4 from '../assets/Briota.jpg';
import CP5 from '../assets/IDBI-Intech.jpg';
import CP6 from '../assets/BobbleAI.jpg';
import CP7 from '../assets/GrowMonks.png';
import CP8 from '../assets/KODEITSolutions.jpg';
import CP9 from '../assets/GirlScriptIndia.jpg';
import CP10 from '../assets/Verzeo.jpg';


export default function Experience() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="experience">
      <div className="text-5xl md:text-6xl text-center md:text-left font-medium text-black-300 pb-4 mb-16">
        Experience
      </div>
      {experiences.map((exp) => {
        return (
          <div className="w-full shadow-md p-5 rounded-lg mb-10">
            <div className=" grid md:grid-cols-4 gap-4 md:order-2">
              <div
                className="w-full h-40 flex items-center justify-center my-auto hover:scale-105 transform transition ease-in cursor-pointer"
                onClick={() => window.open(exp.companyUrl || window.location, '_blank')}
              >
                <img
                  className="max-h-full max-w-full rounded-md"
                  src={
                    exp.img ||
                    'https://icons.veryicon.com/png/o/miscellaneous/zr_icon/company-23.png'
                  }
                  alt=""
                ></img>
              </div>
              <div className="md:col-span-3 space-y-4 my-auto">
                <div className="text-lg md:text-2xl text-cyan-500 font-bold">{exp.company}</div>
                <div className="md:flex justify-between">
                  <div className="text-xl text-gray-500 font-bold ">{exp.position}</div>
                  <div className=" text-gray-500 font-bold">{exp.date}</div>
                </div>
                <div className=" text-black-400 text-sm">
                  <ul className="list-disc">
                    {exp.details.map((detail) => (
                      <li>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const experiences = [
  {
    position: 'Software Project Intern',
    company: 'Veritas Technologies',
    details: [
      'Created a notification service using Apache Kafka with Spring-Boot for email and push notifications.',
      'Worked on a Rundeck Job to fetch active IPO’s details at a specific interval from NSE and update on Upstox’s platform.',
      'HolidayMaster processor to update trading holiday’s from a CSV file into MySQL using java.nio.',
      'Service to generate portfolio statement of a user in the form of PDF file using Thymeleaf template engine.',
      'I am Contributing to the API migration of the IPO application from Node.js to Spring-Boot.',
    ],
    date: 'Sept 2022 - Present',
    img: CP1,
    companyUrl: "https://www.veritas.com/"

  },
  {
    position: 'Machine Learning & Cloud Engineer',
    company: 'Algo Analytics',
    details: [
      'Worked on a Health-Tech application, worked on the onbaording module in which I used Redux Toolkit for managing the data flow of multiple forms. Used NextJs + Tailwind CSS + Storybook for creating and testing frontend components.',
    ],
    date: 'Aug 2022 - Present',
    img: CP2,
    companyUrl: 'https://www.algoanalytics.com/'
  },
  {
    position: 'Machine Learning Facilitator',
    company: 'Google',
    details: [
      'Built a Vendor Management System and Auction Platform.',
      'The Platform automated the activities performed between Customers and Vendors.',
      " Tackled some real world problems by using advance React JS and Redux concepts. The platform is built to help top MNC's in the world.",
    ],
    date: 'Sept 21 - Present',
    img: CP3,
    companyUrl: "https://about.google/"
  },
  {
    position: 'Product Development Intern',
    company: 'Briota Technologies',
    details: [
      'Built a Vendor Management System and Auction Platform.',
      'The Platform automated the activities performed between Customers and Vendors.',
      " Tackled some real world problems by using advance React JS and Redux concepts. The platform is built to help top MNC's in the world.",
    ],
    date: 'Oct 21 - Jan 22',
    img: CP4,
    companyUrl: "https://www.briota.co/"
  },
  {
    position: 'Software Development Intern',
    company: 'IDBI Intech Ltd.',
    details: [
      'Created a notification service using Apache Kafka with Spring-Boot for email and push notifications.',
      'Worked on a Rundeck Job to fetch active IPO’s details at a specific interval from NSE and update on Upstox’s platform.',
      'HolidayMaster processor to update trading holiday’s from a CSV file into MySQL using java.nio.',
      'Service to generate portfolio statement of a user in the form of PDF file using Thymeleaf template engine.',
      'I am Contributing to the API migration of the IPO application from Node.js to Spring-Boot.',
    ],
    date: 'June 2021 - Dec 2021',
    img: CP5,
    companyUrl: "https://www.idbiintech.com/"

  },
  {
    position: 'Artificial Intelligence Intern',
    company: 'Bobble AI',
    details: [
      'Created a notification service using Apache Kafka with Spring-Boot for email and push notifications.',
      'Worked on a Rundeck Job to fetch active IPO’s details at a specific interval from NSE and update on Upstox’s platform.',
      'HolidayMaster processor to update trading holiday’s from a CSV file into MySQL using java.nio.',
      'Service to generate portfolio statement of a user in the form of PDF file using Thymeleaf template engine.',
      'I am Contributing to the API migration of the IPO application from Node.js to Spring-Boot.',
    ],
    date: 'July 2021 - Oct 2021',
    img: CP6,
    companyUrl: "https://www.bobble.ai/en/home"

  },
  {
    position: 'Software Developer & Managing Head',
    company: 'Grow Monks',
    details: [
      'Created a notification service using Apache Kafka with Spring-Boot for email and push notifications.',
      'Worked on a Rundeck Job to fetch active IPO’s details at a specific interval from NSE and update on Upstox’s platform.',
      'HolidayMaster processor to update trading holiday’s from a CSV file into MySQL using java.nio.',
      'Service to generate portfolio statement of a user in the form of PDF file using Thymeleaf template engine.',
      'I am Contributing to the API migration of the IPO application from Node.js to Spring-Boot.',
    ],
    date: 'Jan 2022 - Present',
    img: CP7,
    companyUrl: "https://www.growmonks.in/"

  },
  {
    position: 'Operations & Technical Lead',
    company: 'KODE IT Solutions',
    details: [
      'Created a notification service using Apache Kafka with Spring-Boot for email and push notifications.',
      'Worked on a Rundeck Job to fetch active IPO’s details at a specific interval from NSE and update on Upstox’s platform.',
      'HolidayMaster processor to update trading holiday’s from a CSV file into MySQL using java.nio.',
      'Service to generate portfolio statement of a user in the form of PDF file using Thymeleaf template engine.',
      'I am Contributing to the API migration of the IPO application from Node.js to Spring-Boot.',
    ],
    date: 'Aug 2021 - Nov 2021',
    img: CP8,
    //companyUrl: ""

  },

  {
    position: 'Machine Learning Intern',
    company: 'Girlscript India',
    details: [
      'Created a notification service using Apache Kafka with Spring-Boot for email and push notifications.',
      'Worked on a Rundeck Job to fetch active IPO’s details at a specific interval from NSE and update on Upstox’s platform.',
      'HolidayMaster processor to update trading holiday’s from a CSV file into MySQL using java.nio.',
      'Service to generate portfolio statement of a user in the form of PDF file using Thymeleaf template engine.',
      'I am Contributing to the API migration of the IPO application from Node.js to Spring-Boot.',
    ],
    date: 'Jan 2021 - March 2021',
    img: CP9,
    companyUrl: "https://www.girlscript.tech/home"

  },

  {
    position: 'Machine Learning Intern',
    company: 'Verzeo',
    details: [
      'Created a notification service using Apache Kafka with Spring-Boot for email and push notifications.',
      'Worked on a Rundeck Job to fetch active IPO’s details at a specific interval from NSE and update on Upstox’s platform.',
      'HolidayMaster processor to update trading holiday’s from a CSV file into MySQL using java.nio.',
      'Service to generate portfolio statement of a user in the form of PDF file using Thymeleaf template engine.',
      'I am Contributing to the API migration of the IPO application from Node.js to Spring-Boot.',
    ],
    date: 'Dec 2019 - Feb 2020',
    img: CP10,
    companyUrl: "https://verzeo.com/"

  }
];
