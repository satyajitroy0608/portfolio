import React from 'react';
import ProfilePic from '../assets/profile2.jpeg';
// import ProfilePic1 from '../assets/profilepic1.jpeg';
import ProfilePic1 from '../assets/FormalPhoto.jpg';
// import ResumeFile from '../assets/Vedant_Daigavane_Resume.pdf';

export default function About() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="about">
      <div className="text-5xl md:text-6xl text-center md:text-left font-medium text-black-300 pb-4 mb-16">
        About Me
      </div>

      <div className="md:flex items-center space-y-8 md:space-y-0">
        <div className="md:order-last basis-1/3 h-full">
          <img src={ProfilePic1} className="rounded-full h-52 w-52 mx-auto" alt=""></img>
        </div>
        <div className="basis-2/3 space-y-4">
          <span className="text-black-500 text-xl font-bold">Hi, I am </span>
          <div className="text-cyan-500 text-4xl font-bold">Satyajit Roy</div>
          <div className="text-xl text-black-500 font-bold">Computer Engineering Student & Software Developer</div>
          <div className="text-l text-black-500">
            GPA: 9.61 / 10 & GRE: 327 / 340
          </div>
          <div className="text-l text-black-500 font-bold">
            
          </div>
          <div className="font-light text-black-400">
          I am in Final Year pursuing B.E. (Computer Engineering) with Hons. in 
          Artificial Intelligence and Machine Learning from Pune Institute of Computer Technology, India.
          My main interests are Machine Learning, Blockchain and Cross-Platform Mobile App Development. I am passionate about making use of technology to solve
          real-world problems.
          </div>
        </div>
      </div>
      <div className="md:flex justify-between">
        <div className="py-10 flex items-center space-x-4 justify-center">
          {social.map((link) => {
            return (
              <a
                href={link.link}
                target={'_blank'}
                rel="noreferrer"
                className="relative rounded-full"
              >
                <img src={link.icon} className="h-10 w-10" alt=""></img>
              </a>
            );
          })}
        </div>
        <a
          className="p-2 cursor-pointer rounded-lg relative px-10 w-max flex items-center m-auto space-x-4 border bg-slate-200"
          href={'https://drive.google.com/file/d/1iuMTP7Wd7EBrqT2awbY8gt4BAVetrD-6/view?usp=sharing'}
          target={'_blanck'}
          rel="noreferrer"
        >
          <div>Resume</div>
          <img
            className="h-6 w-6"
            src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
            alt=""
          ></img>
        </a>
      </div>
    </div>
  );
}

const social = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    link: 'https://www.linkedin.com/in/satyajit-roy060801/',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    link: 'https://github.com/satyajitroy0608',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
    link: 'mailto: satyajit12.roy@gmail.com',
  },
];
