import { setProject } from '@Redux/projectSlice';
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Project = ({type}) => {
    const dispatch = useDispatch();
    const [form,setForm ] = useState({
        title:"",
        description:"",
        explanation:"",
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(setProject(form))
        
    }

  return (
    <section className=' flex flex-col text-center'>
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
          Project
        </span>

        <input
          // value={post.prompt}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder='Title of your project'
          required
          className='form_input '
        />
      </label>

      <label>
        <span className='form_text'>
          Description
        </span>
        <input
          // value={post.tag}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          type='text'
          placeholder='Write Technologies and Tools'
          required
          className='form_input'
        />
      </label>
      <label>
        <span className='form_text'>
          Explanation
        </span>
        <textarea
          // value={post.tag}
          onChange={(e) => setForm({ ...form, explanation: e.target.value })}
          type='text'
          placeholder='Explain your project in points.'
          required
          className='form_textarea'
        />
      </label>

      <div className='flex-end mx-3 mb-5 gap-4'>
        <Link
         href='/' className='text-gray-500 text-sm'>
          Cancel
        </Link>

        <button
          type='submit'
        //   disabled={submitting}
          className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
        >
          {/* {submitting ? `${type}ing...` : type} */}
          Save
        </button>
      </div>
    </form>
  </section>
  )
}

export default Project