import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const EducationSection = () => {
    const education = useSelector((state) => state.education.value)
    console.log(education)

  return (
    <div class="mb-3">
      <h2 class="section_text ">Education</h2>
    <hr></hr>

      <p class="text-gray-600">{education.studyProgram}</p>
      <p class="text-gray-600">{education.university}</p>
      <p class="text-gray-600">Bikaner Technical University, Bikaner | August 2018 - May 2022 | 7.5 CGPA</p>
      <p class="text-gray-600">Ajmer College, India</p>
      {/* <!-- Add more education details --> */}
    </div>

  )
}

export default EducationSection