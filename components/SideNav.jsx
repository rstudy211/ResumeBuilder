import React from "react";

const SideNav = ({ handleItemClick }) => {
  return (
    <div className="flex flex-col print:hidden left-0 h-screen fixed">
        <button
        onClick={() => handleItemClick("basicinfo")}
        className="nav_text "
      >
        <span class="material-symbols-outlined !text-[40px] mb-2">
person
</span>
        Basic Details
      </button>
      <button onClick={() => handleItemClick("education")} className="nav_text">
        <span class="material-symbols-outlined mb-2 !text-[40px]">school</span>Education
      </button>
      <button onClick={() => handleItemClick("skills")} className="nav_text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          fill="currentColor"
          class="bi bi-code-slash mb-2"  
          viewBox="0 0 16 16"
        >
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
        </svg>
        Skills
      </button>
      <button onClick={() => handleItemClick("project")} className="nav_text">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class=" mb-2"  
          viewBox="0 0 16 16">
          <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
          <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z"/>
        </svg>
        Project
      </button>
      <button
        onClick={() => handleItemClick("workexperience")}
        className="nav_text"
      >
        <span class="material-symbols-outlined !text-[40px] mb-2  ">work</span>  
        Work Experience
      </button>
      
    </div>
  );
};

export default SideNav;
