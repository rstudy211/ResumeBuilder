"use client"
import React, { useEffect, useState } from 'react'
import EducationForm from './EducationForm'
import Skills from './Skills'
import Link from 'next/link'
import SideNav from './SideNav'
import Project from './Project'
import WorkExperience from './WorkExperience'
import { useRouter } from 'next/navigation'
import BasicDetailsForm from './BasicDetailsForm'

const Form = () => {
    const [activeForm, setActiveForm] = useState("education");
    // const router = useRouter();
    const handleItemClick = (formType)=>{
        setActiveForm(formType)
        localStorage.setItem('activeForm', formType);
    // router.push(`/${formType}`,undefined, { shallow: true });

    
    
    
  };
  useEffect(()=>{
    const save = localStorage.getItem('activeForm')
    if(save){
        setActiveForm(save)
    }
  },[])
  
  
  return (
    
<>
<SideNav  handleItemClick ={handleItemClick}/>
<div className='w-[40%]  print:hidden'>
    {activeForm === 'basicinfo' && <BasicDetailsForm type={'Basic'}/>}
    {activeForm === 'education' && <EducationForm type={'Education'}/>}
{activeForm === 'project' && <Project type={'Project'}/>}
{activeForm === 'skills' && <Skills type={'Skills'}/>}
{activeForm === 'workexperience' && <WorkExperience type = {"Work Experience"}/>}
</div>

</>
  )
}

export default Form