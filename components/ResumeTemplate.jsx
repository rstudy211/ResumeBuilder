"use client";
import React, { useRef } from "react";
import EducationSection from "./EducationSection";
import ProjectSection from "./ProjectSection";
import { useSelector } from "react-redux";

const ResumeTemplate = () => {
  const skills = useSelector((state) => state.skills.value);
  const basicDetails = useSelector((state) => state.basicdetails.value);
  console.log("we are in resume");
  console.log(skills);

  return (
    <section className="print:w-full print:h-full w-[48%]">
      {/* <button className='outline_btn block' onClick={()=>print('a', 'jsx-template')}>Download</button> */}

      <div
        id="myComponent"
        class="max-w-4xl print:max-w-none w-full scale-90  mx-auto p-8 bg-white  print:m-0  shadow-lg  rounded-lg block "
      >
        <h1 class="text-3xl font-semibold text-center  mb-2">
          {basicDetails.name}
        </h1>

        {/* <!-- Contact --> */}
        <li class="mb-3 text-sm flex justify-center divide-x  divide-slate-500 items-center ">
          <a href="#" className="px-2 text-gray-600 text-center ">
            +91 {basicDetails.contact}
          </a>
          <a href="#" className="px-2 ">
            {basicDetails.email}
          </a>
          <a href={basicDetails.github} className="px-2 flex justify-center items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Github
          </a>
          {/* <a href="#" className="px-2 "></a> */}
          <a
            className="px-2 flex justify-center items-center gap-1"
            href={basicDetails.linkedin}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
            Linkedin
          </a>
        </li>

        {/* <!-- Education --> */}
        <EducationSection />
        {/* <!-- Experience --> */}
        <div class="mb-3">
          <h2 class="section_text">Work Experience</h2>
          <hr></hr>
          <div class="mb-4">
            <h3 class="text-lg font-semibold">
              Software Development Engineer - I
            </h3>
            <p class="text-gray-600">
              GeekyAnts, Bengaluru | Aug 2022 – Present
            </p>
            <ul class="list-disc list-inside text-gray-600 pl-6 mb-2">
              <li>DevOps Engineer (Microsoft Azure) - Client Project</li>
              <li>Full-Stack Developer(SpringBoot, React) - Client Project</li>
            </ul>
          </div>
          {/* <!-- Add more experience details --> */}
        </div>

        {/* <!-- Projects --> */}
        <ProjectSection />

        {/* <!-- Skills --> */}
        <div class="mb-3">
          <h2 class="section_text">Skills</h2>
          <hr></hr>
          <ul class="grid grid-cols-5 gap-x-1 text-gray-600">
            {skills.map((skill, key) => (
              <li key={key}>{skill.name}</li>
            ))}

            {/* <!-- Add more skills --> */}
          </ul>
        </div>

        {/* <!-- Accomplishments & Certifications --> */}
        <div class="mb-3">
          <h2 class="section_text">Accomplishments & Certifications</h2>
          <hr></hr>
          <ul class="list-disc list-inside text-gray-600 pl-6">
            <li>Winner of ChatGpt Challenge in a Company</li>
            {/* <!-- Add more accomplishments --> */}
          </ul>
        </div>

        {/* <!-- Coding Profiles/Links --> */}
        {/* <div class="mb-3">
      <h2 class="section_text">Coding Profiles/Links</h2>
      <hr></hr>
      <p class="text-gray-600">Codechef: Achieved a maximum rating of 1647 on CodeChef...</p>
      <p class="text-gray-600">HackerRank: Earned the distinguished 5-star rating in Python...</p>
      <p class="text-gray-600">Leetcode: Programmed solutions to 450+ coding problems on Leetcode...</p>
      <p class="text-gray-600">Codechef: Achieved a maximum rating of 1647 on CodeChef...</p>
      <p class="text-gray-600">HackerRank: Earned the distinguished 5-star rating in Python...</p>
      
    </div> */}

        {/* <!-- Courses/Training --> */}
        {/* <div class="mb-3">
      <h2 class="section_text">Courses/Training</h2>
      <hr></hr>
      <p class="text-gray-600">Machine Learning Training: Completed Machine Learning training from Internshala...</p>
      <p class="text-gray-600">Django Training: Successfully completed Django training from Udemy...</p>
      <p class="text-gray-600">Python Course: Completed a comprehensive Python course from Udemy...</p>
      <p class="text-gray-600">Django Rest Framework Training: Enrolled in the Django Rest Framework training course...</p>
      <p class="text-gray-600">Machine Learning Training: Completed Machine Learning training from Internshala...</p>
      
    </div> */}
      </div>
    </section>
  );
};

export default ResumeTemplate;
