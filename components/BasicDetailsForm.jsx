import basicDetailsSlice, { setBasicDetails } from "@Redux/basicDetailsSlice";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const BasicDetailsForm = ({ type, submitting  }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "Rajeev Mohan",
    email: "abc@gmail.com",
    contact: "123323232",
    linkedin: "yuor linkedin link",
    github: "github link",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    dispatch(setBasicDetails(form));
    console.log(basicDetailsSlice); // Replace with the actual action you want to dispatch
  };
  return (
    <>
      <section className=" flex flex-col text-center ">
        <h1 className="text-2xl font-bold ">
          <span className="blue_gradient">{type} Form</span>
        </h1>
        <p className="text-md text-gray-400 text-left">
          {type} Fill below form with your details
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-2xl flex text-left flex-col gap-7 glassmorphism"
        >
          <label>
            <span className="form_text">Name</span>

            <input
              // value={post.prompt}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Jhon Doe"
              required
              className="form_input "
            />
          </label>

          <label>
            <span className="form_text">Email</span>
            <input
              // value={post.tag}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              placeholder="jhondoe@gmail.com "
              required
              className="form_input"
            />
          </label>
          <label>
            <span className="form_text">Contact</span>
            <input
              // value={post.tag}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
              type="tel"
              placeholder="(123) 456-7890"
              required
              className="form_input"
            />
          </label>
          <label>
            <span className="form_text">LinkedIn Profile</span>
            <input
              // value={post.tag}
              onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
              type="text"
              placeholder="https://www.linkedin.com/in/johndoe"
              required
              className="form_input"
            />
          </label>
          <label>
            <span className="form_text">Github Profile</span>
            <input
              // value={post.tag}
              onChange={(e) => setForm({ ...form, github: e.target.value })}
              type="text"
              placeholder="https://github.com/johndoe"
              required
              className="form_input"
            />
          </label>

          <div className="flex-end mx-3 mb-5 gap-4">
            <Link href="/" className="text-gray-500 text-sm">
              Cancel
            </Link>

            <button
              type="submit"
              onClick={() => dispatch(basicDetailsSlice)}
              disabled={submitting}
              className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            >
              {/* {submitting ? `${type}ing...` : type} */}
              Save
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default BasicDetailsForm;
