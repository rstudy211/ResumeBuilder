import skillsSlice, { setSkills } from "@Redux/skillsSlice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Skills = ({ type }) => {
  const dispatch = useDispatch();
  const [newskills, setNewSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({
    name: "", // Initialize the new skill name
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("save skills");
    dispatch(setSkills(newskills));
  };
  const handleRemove = (e) => {
    console.log(e);
    // delete newskills[e];
    const updatedArray = newskills.filter((obj,index) => index !== e);
    setNewSkills(updatedArray);
    console.log(updatedArray);

  };
  
  const handleAdd = () => {
    // console.log(e.target.value)
    if (newSkill.name.trim() === "") {
      // Prevent adding empty skills
      return;
    }

    // Create a new skill object and add it to newskills
    const updatedSkills = [...newskills, newSkill];
    setNewSkills(updatedSkills);

    // Clear the input field
    console.log("sdjjsjkj");
    setNewSkill({ name: "" });

    console.log(updatedSkills);
  };
  useEffect(() => {
    // console.log(newSkill);
    
  }, [newSkill,newskills]);

  const handleChange = (e) => {
    console.log(e.key, "key");

    if (e.key === "Enter") {
      handleAdd();
      return;
    }

    setNewSkill({ name: e.target.value });
  };

  return (
    <section className=" flex flex-col text-center ">
      <h1 className="text-2xl font-bold ">
        <span className="blue_gradient">{type} Form</span>
      </h1>
      <p className="text-md text-gray-400 text-left">
        {type} Fill below form with your details
      </p>

      <div className="mt-10 w-full max-w-2xl flex text-left flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-400">
            Skills
          </span>

          <input
            onChange={handleChange}
            onKeyDown={handleChange}
            value={newSkill.name}
            placeholder="Eg: HTML"
            className="form_input "
          />

          <button
            type="button"
            onClick={handleAdd}
            className="bg-orange-500 text-white cursor-pointer my-4 inline-block  text-2xl px-2 rounded-full "
          >
            +
          </button>

          <div className="flex items-center flex-wrap text-gray-400 mt-3 gap-2 rounded-full">
            {newskills.map((skill, index) => (
              <div className="flex items-center justify-between gap-x-2 bg-slate-100/20 px-2 py-1 rounded-full">
                <span className="font-light text-sm" key={index}>
                  {skill.name}
                </span>

                <button onClick={(e)=>(handleRemove(index))} className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi hover:text-gray-300 rounded-full  bi-x-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </label>

        <form onSubmit={handleSubmit} className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            //   onClick={()=>dispatch(skillsSlice(newskills))}
            //   disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {/* {submitting ? `${type}ing...` : type} */}
            Save
          </button>
        </form>
      </div>
    </section>
  );
};

export default Skills;
