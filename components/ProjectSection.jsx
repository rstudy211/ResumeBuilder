import React from 'react'
import { useSelector } from 'react-redux'

const ProjectSection = () => {
    const project = useSelector((state) => state.project.value)
    const bulletPoints = project.explanation.split('\n').filter((point) => point.trim() !== '');


  return (
    <div class="mb-3">
      <h2 class="section_text">Projects</h2>
      <hr></hr>
      <div class="mb-4">
        <h3 class="text-lg font-semibold">{project.title}</h3>
        <p class="text-gray-600">{project.description}</p>
        {/* <li class="text-gray-600">{project.explanation}</li> */}
        <ul className='text-gray-600 ml-10 list-disc list-outside'>
      {bulletPoints.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
        {/* <!-- Add more project details --> */}
      </div>
      {/* <!-- Add more projects --> */}
    </div>
  )
}

export default ProjectSection