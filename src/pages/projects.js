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
    //<div className=" bg-slate-50 relative overflow-hidden" id="projects">
    <div className=" max-w-6xl mx-auto p-5 py-20" id="projects">
      <div className="text-5xl md:text-6xl text-center md:text-left font-medium text-black-300 pb-4 mb-16">
        Projects
      </div>
      {experiences.map((exp) => {
        return (
          <div className="w-full shadow-md p-5 rounded-lg mb-10">
            <div className=" grid md:grid-cols-2 gap-4 md:order-2">
              
              <div className="md:col-span-3 space-y-4 my-auto">
                <div className="text-lg md:text-2xl text-cyan-500 font-bold">{exp.company}</div>
                <div className="md:flex justify-between">
                  <div className="text-l text-gray-500 font-bold">{exp.position}</div>
                  <div className=" text-l text-gray-500">{exp.date}</div>
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
    //</div>
  );
}

const experiences = [
  {
    position: 'Flutter, Firebase, Flask, Computer Vision, NLP, ML',
    company: 'Automatic Summarizer',
    details: [
      "A web and mobile-based application which makes use of Deep Learning, Computer Vision and Natural Language Processing techniques to automatically generate a summary of the input given to it.",
      "Input can be in the form of audio, video or text file. The application is also capable of automatically generating Meeting Minutes of video calls hosted on popular platforms like Zoom and Microsoft Teams."
    ],
    date: 'Jan 2021 - April 2021',
    //img: CP1,
    //companyUrl: "https://www.veritas.com/"

  },

  {
    position: 'Python, Flutter, Firebase Flask, ML',
    company: 'Depression Detector',
    details: [
      "Performed sentiment analysis and multi-class classification using combined CNN-LSTM approach on Twitter data to detect mental depression.",
      "The model has an accuracy of 85%.",
    ],
    date: 'May 2021 - Jul 2021',
    //img: CP2,
    //companyUrl: 'https://www.algoanalytics.com/'
  },

  {
    position: 'MERN, Flutter, Firebase, Flask, Machine Learning',
    company: 'Rebuild Hub',
    details: [
      "A web and mobile-based application that will bridge the gap between waste donors and waste collectors and has the potential to have a huge positive impact on collection of recyclable waste.",
      "Provision of monetary benefits is made for the waste donors. The platform supports donation and collection of all kinds of waste.",
      " A Machine Learning based recommendation system is also deployed which suggests potential waste collectors to the waste donors based on previous customer feedback."
    ],
    date: 'July 2021 - Sept 2021',
    //img: CP2,
    //companyUrl: 'https://www.algoanalytics.com/'
  },
  {
    position: 'Flutter, Firebase, Flask, Machine Learning',
    company: 'Smart Radiation Detector',
    details: [
      "This app developed in Flutter accurately calculates the electronic radiation exposure in an individual's day to day life.",
      "The trained Machine Learning model working in the backend also triggers a notification in case the user is about to enter a location which has high radiation exposure."
    ],
    date: 'Apr 2021 - June 2021',
    //img: CP3,
    //companyUrl: "https://about.google/"
  },
  {
    position: 'Flutter, Firebase, Flask, NLP, Machine Learning',
    company: 'Women Safety App',
    details: [
     "This app developed in Flutter makes use of Speech Recognition to detect trigger words such as 'Help' & 'Save Me' and sends a SMS notification to the emergency contacts along with the location coordinates of the user.",
     "Authentication of the user is done through Firebase and a NLP model trained to detect various trigger words runs in the backend.",
     "As the app does not store any data of the audio conversations that it listens to, user privacy is preserved."
    ],
    date: 'Sept 2020 - Nov 2020',
    //img: CP4,
    //companyUrl: "https://www.briota.co/"
  },
  {
    position: 'Blockchain, Solidity, Flutter',
    company: 'Medchain',
    details: [
      "A mobile-based medical records management system based on Blockchain to securely store medical data, facilitate online consultations and enable medical fee payment.",
      "Tested and Deployed on Ethereum Blockchain."
    ],
    date: 'Dec 2021 - Feb 2022',
    //img: CP5,
    //companyUrl: "https://www.idbiintech.com/"

  },
  {
    position: 'Hyperledger, Blockchain, React.js, Flutter',
    company: 'Disaster Management System',
    details: [
      "A web and mobile-based disaster management system to be used by National Defense Response Force (NDRF) making use of private Blockchain."
    ],
    date: 'Mar 2022 - Aug 2022',
    //img: CP6,
    //companyUrl: "https://www.bobble.ai/en/home"

  },
  {
    
      position: 'HTML, CSS, Javascript, React.js, Node.js',
      company: 'Portfolio Website',
      details: [
        "The website you are looking at!"
      ],
      date: 'Sept 2022',
      //img: CP6,
      //companyUrl: "https://www.bobble.ai/en/home"
  
    
    
  }
  
];
