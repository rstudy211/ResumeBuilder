import educationSlice, { setEducation } from '@Redux/educationSlice';
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const EducationForm = ({ type, post, setPost, submitting }) => {
    const dispatch = useDispatch();
     const [form, setForm] = useState(
        {
            studyProgram: "",
            university: "",
          }
     )
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(form)
        dispatch(setEducation(form)); 
        console.log(educationSlice)// Replace with the actual action you want to dispatch
      };
  return (
    <>
    <section className=' flex flex-col text-center '>
    <h1 className='text-2xl font-bold '>
      <span className='blue_gradient'>{type} Form</span>
    </h1>
    <p className='text-md text-gray-400 text-left'>
      {type} Fill below form with your details
    </p>

    <form
      onSubmit={handleSubmit}
      className='mt-10 w-full max-w-2xl flex text-left flex-col gap-7 glassmorphism'
    >
      <label>
        <span className='form_text'>
          Study Programe
        </span>

        <input
          // value={post.prompt}
          onChange={(e) => setForm({ ...form, studyProgram: e.target.value })}
          placeholder='Degree'
          required
          className='form_input '
        />
      </label>

      <label>
        <span className='form_text'>
          University
        </span>
        <input
          // value={post.tag}
          onChange={(e) => setForm({ ...form, university: e.target.value })}
          type='text'
          placeholder='University Name'
          required
          className='form_input'
        />
      </label>

      <div className='flex-end mx-3 mb-5 gap-4'>
        <Link
         href='/' className='text-gray-500 text-sm'>
          Cancel
        </Link>

        <button
          type='submit'
          onClick={()=>dispatch(educationSlice)}
          disabled={submitting}
          className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
        >
          {/* {submitting ? `${type}ing...` : type} */}
          Save
        </button>
      </div>
    </form>
  </section>
  </>
  )
}

export default EducationForm